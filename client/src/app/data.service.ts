import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable()
export class DataService {

  user;

  constructor(private _http: Http, private router: Router, private route: ActivatedRoute) { }

  setUserName(Currentuser){
    this.user = Currentuser;
  }

  getUserName(){
    return this.user; 
  }

  showAll(callback){
    this._http.get('/dashboard').subscribe (
      (response) => {
        console.log("call back in TS");
        callback(response.json())
      },
      (err) => {console.log(err);}
    )}


   createO(question, option1, option2, option3, option4){
    this._http.post('/create', {
      name: this.user,
      question: question, 
      option1: option1, 
      option2: option2, 
      option3: option3, 
      option4: option4
    }).subscribe(
      (response) => {
        console.log("Added..---Service.ts");
      },
      (err) => {
        console.log("something went wrong");
      }
    )
  }


}

