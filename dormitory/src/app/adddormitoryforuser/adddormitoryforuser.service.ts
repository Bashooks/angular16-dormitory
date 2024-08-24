import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdddormitoryforuserService {
  private apiUrl = 'https://api.bytescale.com/v2/accounts/kW15cCS/uploads/form_data';
  private token = 'public_kW15cCS6GoYZaNsTUMuvcjmqYEFT';

  constructor(private http: HttpClient) { }

  uploadFiles(files: File[]) {
    const formData: FormData = new FormData();
    files.forEach((file, index) => {
      formData.append('file', file, file.name);
    });

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
