import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) {}

  validateUser(usr: string, cont: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/login', { user: usr, contrasena: cont });
  }

  registerUser(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.baseUrl, usuario);
  }

  updateUser(id: string, usuario: Usuario): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, usuario);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  searchUser(query: { id?: string, name?: string }): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + '/search', { params: query });
  }

  getAllUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + '/all');
  }

  searchUserByBarcode(barcode: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/barcode/${barcode}`,);
  }

  changePassword(email: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put<any>(this.baseUrl+'/change-password', { email, oldPassword, newPassword });
  }
}
