import { Injectable } from '@angular/core'; 
import { HttpHeaders } from '@angular/common/http';  
import { HttpClient } from '@angular/common/http'  
import { User } from '../model/user';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  url = 'https://localhost:44396/api/UploadUsers';

  UploadExcel(formData: FormData) {  
    let headers = new HttpHeaders();  
  
    headers.append('Content-Type', 'multipart/form-data');  
    headers.append('Accept', 'application/json');  
  
    const httpOptions = { headers: headers };  
  
    return this.http.post(this.url + '/UploadExcel', formData, httpOptions)  
  }  
  BindUser(): Observable<User[]> {  
    return this.http.get<User[]>(this.url + '/UserDetails');  
  }  
}
