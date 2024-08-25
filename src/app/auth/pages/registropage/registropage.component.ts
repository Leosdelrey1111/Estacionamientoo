import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../entradas/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registropage',
  templateUrl: './registropage.component.html',
  styles: [] 
})
export class RegistropageComponent {

  logForm: FormGroup;
  showLoginForm = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {
    this.logForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  openLoginForm() {
    this.showLoginForm = true;
  }

  closeLoginForm() {
    this.showLoginForm = false;
  }

  entrar() {
    if (this.logForm.invalid) {
      this.snackBar.open('Por favor, complete todos los campos correctamente.', 'Cerrar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    const { email, password } = this.logForm.value;

    console.log(`Enviando solicitud de inicio de sesión con: email=${email}, password=${password}`);

    this.userService.validateUser(email, password).subscribe(
      (res) => {
        console.log('Respuesta de inicio de sesión:', res);
        sessionStorage.setItem('user', JSON.stringify(res.user));
        const userType = res.TipoUsuario;
        let redirectUrl = '';
        let message = '';

        switch (userType) {
          case 'Administrador':
            redirectUrl = '/admin/registro';
            message = 'Bienvenido Administrador!';
            break;
          case 'Empleado':
            redirectUrl = '/entradas/list';
            message = 'Bienvenido Empleado!';
            break;
          default:
            redirectUrl = '/entradas/perfil';
            message = 'Bienvenido Usuario!';
        }

        this.router.navigate([redirectUrl]);
        this.snackBar.open(message, 'Cerrar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.snackBar.open('Correo o contraseña incorrectos. Por favor ingrese un usuario válido.', 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  forgotPassword() {
    this.router.navigate(['/auth/recovery']);
  }

  onSubmit() {
    this.entrar();
  }
}
