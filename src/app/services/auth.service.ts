import { Injectable } from '@angular/core';
import { Signin } from '../models/signin';
import { Signup } from '../models/signup';
import { User } from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseMessageDto } from '../models/response-message-dto';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = "http://localhost:8070"

  constructor(private httpClient: HttpClient) { }

  login(loginData:Signin):Observable<any>{
    return this.httpClient.post<any>(this.url + "/auth/sign-in", loginData)
  }

  register(registerData:Signup):Observable<ResponseMessageDto>{
    return this.httpClient.post<any>(this.url + "/auth/sign-up", registerData)
  }

  getUserDetails():Observable<User>{
    let token = localStorage.getItem('token');
    const header = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':`Bearer ${token}`
    })

    return this.httpClient.post<any>(this.url + "/auth/user-details", {headers:header})
  }

}
