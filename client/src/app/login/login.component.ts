import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = { username: ''}
  

  constructor(private _dataService : DataService, private router: Router) { }

  ngOnInit() {
  }

  //when user logged in 
  onClick(){
    this._dataService.setUserName(this.user.username);
    this.router.navigate(['dashboard']);
    console.log(this.user.username);
    this.user = {username: ''}
  }
}
