import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  username; 
  vote = []; 

  constructor(private _dataService : DataService, private router: Router) { }

  ngOnInit() {
    this.username = this._dataService.getUserName();
    this._dataService.showAll((data) =>{
      this.vote= data; 
      console.log("Show.component.ts", this.vote);
    }
    )}

    deleteQ(id_question){
      this._dataService.delete(id_question);
      this.ngOnInit()
      //shows after delete question
    }

}
