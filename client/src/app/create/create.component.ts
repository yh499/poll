import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  vote; 
  user; 

  question;
  option1;
  option2;
  option3;
  option4;
  

  constructor(private router: Router, private _dataService: DataService) { }

  //who's submitting polls 
  ngOnInit() {
    this.user = this._dataService.getUserName();
  }

  onCreate(){
    
    this._dataService.createO(this.question, this.option1, this.option2, this.option3, this.option4);
    console.log("this is from onCreate", this.question);
    this.router.navigate(['dashboard']);
    
  }

}
