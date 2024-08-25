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
      this.snackBar.open('Por favor, complete todos los campos correctamente.', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
      return;
    }

    const { email: user, password: contrasena } = this.logForm.value;

    console.log(`Enviando solicitud de inicio de sesión con: user=${user}, contrasena=${contrasena}`);

    this.userService.validateUser(user, contrasena).subscribe(
      (res) => {
        console.log('Respuesta de inicio de sesión:', res);
        sessionStorage.setItem('user', JSON.stringify(res['user']));
        if (res.TipoUsuario === 'Administrador') {
          this.router.navigate(['/admin/registro']);
          this.snackBar.open('Bienvenido Administrador!', 'Cerrar', { duration: 3000, panelClass: ['success-snackbar'] });
        } else if (res.TipoUsuario === 'Empleado') {
          this.router.navigate(['/entradas/list']);
          this.snackBar.open('Bienvenido Empleado!', 'Cerrar', { duration: 3000, panelClass: ['success-snackbar'] });
        } else {
          this.router.navigate(['/entradas/perfil']);
          this.snackBar.open('Bienvenido Usuario!', 'Cerrar', { duration: 3000, panelClass: ['success-snackbar'] });
        }
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        this.snackBar.open('Correo o contraseña incorrectos. Por favor ingrese un usuario valido.', 'Cerrar', { duration: 3000, panelClass: ['error-snackbar'] });
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
