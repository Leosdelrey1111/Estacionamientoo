import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reporte } from '../interfaces/reporte'; // Asegúrate de importar la interfaz correctamente
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class reporteService {

  private baseUrl: string = environment.baseUrl;; // Cambia la URL según tu configuración

  constructor(private http: HttpClient) { }

  generarReporte(reporte: reporte): Observable<any> {
    return this.http.post(`${this.baseUrl}/`, reporte);
  }

  exportarPDF(reporteId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/exportar/pdf/${reporteId}`, { responseType: 'blob' });
  }

 
}
