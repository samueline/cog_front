import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public url = "http://localhost/8070"

  token = localStorage.getItem('token')
  header = new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':`Bearer ${this.token}`
  })

  constructor(
    private httpClient :HttpClient
  ) { }

  getUserMessage(){
    return this.httpClient.get<any>(this.url + '/message/user-message',{headers:this.header})
  }

  getAdminMessage(){
    return this.httpClient.get<any>(this.url + '/message/admin-message',{headers:this.header})
  }

}
