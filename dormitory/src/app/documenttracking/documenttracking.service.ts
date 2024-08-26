import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumenttrackingService {

  private baseUrl = 'http://localhost:8080/documents';

  constructor(private http: HttpClient) { }

  getDocumentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl+'/person'}/${id}`);
  }

  getDocumentAll(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/all'}`);
  }

  downloadDocument(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl+'/download'}/${id}`, { responseType: 'blob' });
  }

  updateDocumentStatus(id: number, status: string): Observable<any> {
    const params = new HttpParams().set('status', status);
    return this.http.put(`${this.baseUrl}/${id}/status`, {}, { params });
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
   
}
