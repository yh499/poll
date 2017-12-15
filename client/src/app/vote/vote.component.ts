import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  id; 
  vote; 
  q;

  constructor(private atR: ActivatedRoute, private _dataService : DataService, private router: Router) { }

  ngOnInit() {

  }

}
