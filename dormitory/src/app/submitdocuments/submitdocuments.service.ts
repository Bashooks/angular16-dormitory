import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitdocumentsService {

  private baseUrl = 'http://localhost:8080/documents/upload';

  constructor(private http: HttpClient) { }

  uploadDocument(
    personId: number,
    recipientName: string,
    documentTitle: string,
    typefile: string,
    file: File
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('personId', personId.toString());
    formData.append('recipientName', recipientName);
    formData.append('documentTitle', documentTitle);
    formData.append('typefile', typefile);
    formData.append('file', file);

    return this.http.post(this.baseUrl, formData);
  }
}
