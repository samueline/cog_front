import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorMlService {

  constructor(private http : HttpClient) { }

  public httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':  'application/json',
       Authorization: 'my-auth-token'
    })
  };

  getResumen(params:any){
    return this.http.post("http://127.0.0.1:8000/" + 'resumen/',params, this.httpOptions )
  }

}
