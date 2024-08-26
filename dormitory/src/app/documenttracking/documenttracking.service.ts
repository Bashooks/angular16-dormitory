import { HttpClient } from '@angular/common/http';
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
}
