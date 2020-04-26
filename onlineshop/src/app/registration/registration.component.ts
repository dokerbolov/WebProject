import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  confirmPassword;
  register;

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.register = {
      username:'',
      password:''
  }
  this.confirmPassword='';
}

  registerUser(){
    if(this.confirmPassword==this.register.password){
    this.apiService.registerNewUser(this.register.username,this.register.password).subscribe(
        responce=>{
          alert('User '+this.register.username+' has been created')
          this.location.back();
        },
        error => alert('User name exists')
    );
  }
  else{
    alert('Passwords is not same');
  }
} 



}
