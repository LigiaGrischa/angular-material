import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  providers: [PlanetsService]
})
export class PlanetsComponent implements OnInit {

//Variablen
elements: Array<any>;

  constructor(private http:Http) {

    this.http.get('../assets/data2.json')
      .map(response => response.json().globaldiscoveryentries)
      .subscribe(res => this.elements = res);
   }

  ngOnInit() {
  }


}
