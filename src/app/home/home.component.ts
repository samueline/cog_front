import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showDetails: boolean = false
  userLogged = {} as User
  userRole:string = ''

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ){}

  ngOnInit():void { 
    this.authService.getUserDetails().subscribe(user => this.userLogged=user)
  }

  getUserDetails(role:string){
    this.showDetails = !this.showDetails
    this.getRoleMessage(role)
  }

  getRoleMessage(role:string){
    if(role === 'ROLE_USER'){
      this.getUserMessage()
    }else{
      this.getAdminMessage()
    }
  }


  getUserMessage(){
    this.messageService.getUserMessage().subscribe(
      response => {
        this.userRole = response.message
      }
    )
  }

  getAdminMessage(){
    this.messageService.getAdminMessage().subscribe(
      response => {
        this.userRole = response.message
      }
    )
  }



}
