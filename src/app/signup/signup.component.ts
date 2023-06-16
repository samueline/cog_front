import { Component } from '@angular/core';
import { Signup } from '../models/signup';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  showPassword: boolean = false;
  registerData = {} as Signup;
  registerResponse:string = '';
  errorMessage:string = '';

  constructor(private authService: AuthService){}


  onShowPassword(){
    this.showPassword = !this.showPassword
  }

  onSignUp(registerData: Signup){
    this.authService.register(registerData).subscribe(
      response => {
        this.registerResponse = response.message
      })
  }

}
