import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signin } from '../models/signin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword: boolean = false;
  loginData = {} as Signin;

  constructor(
    private authSrv: AuthService,
    private router:Router    
    ){}

  ngOnInit():void{
  }

  onShowPassword(){
    this.showPassword = !this.showPassword
  }

  onSignIn(loginData: Signin){
    this.authSrv.login(loginData).subscribe(
      token => {
        localStorage.setItem('token',token.message)
        this.router.navigateByUrl('/home')
      }
    )
  }


}
