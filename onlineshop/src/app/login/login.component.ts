import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Location} from '@angular/common'
import { UserId } from 'src/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id='';
  user: UserId;
  username = '';
  password = '';

  constructor(private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    
  }

  login(){
    this.apiService.loginUser(this.username,this.password).subscribe(res=>
      {
        localStorage.setItem('token', res.token);
        this.apiService.getUserId(this.username).subscribe(idq=>
          localStorage.setItem('userId',idq.id.toString())
          )
        this.username = '';
        this.password = '';
        this.location.back();
        alert('You are succesfully logged ') 
      }
      );
  }
}
