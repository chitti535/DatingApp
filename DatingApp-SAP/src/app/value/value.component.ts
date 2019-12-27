import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  Values: any;
  ngOnInit() {
    this.getValues();
  }

  getValues(){
     this.httpClient.get("http://localhost:5000/api/values")
     .subscribe(response => {
       this.Values = response;
      }, rror=>{
        console.log('Error..');
      });
  }
}
