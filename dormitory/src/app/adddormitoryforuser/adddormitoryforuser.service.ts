import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdddormitoryforuserService {
  private apiUrl = 'http://localhost:8080';  // เปลี่ยนเป็น URL ของ API ที่ถูกต้อง

  constructor(private http: HttpClient) { }

  uploadFiles(files: File[]) {
    const formData: FormData = new FormData();
    files.forEach(file => {
      formData.append('files', file); // 'files' คือคีย์ที่ต้องตรงกับที่ Spring Boot คาดหวัง
    });
  
    return this.http.post(this.apiUrl+'/dormitories/upload', formData);
  }

  
  createDormitory(dormitory: any): Observable<any> {
    return this.http.post(this.apiUrl+'/dormitories', dormitory);
  }

  
}
