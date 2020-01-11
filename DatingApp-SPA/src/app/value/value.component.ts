import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  Values: any;
  Url: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.Url = environment.baseUrl;

    this.httpClient.get(this.Url + '/values')
      .subscribe(response => {
        this.Values = response;
      }, error => {
        console.log('Error..');
      });
  }
}
