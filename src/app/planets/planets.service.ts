import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Discovery } from './discovery';

@Injectable()
export class PlanetsService {


  constructor(private http:Http) { }


  /**
  * This method is used to return all elements from a json
  * @return json This returns the json from the REST API
  */
  getPlanets(): Observable<Discovery> {
       return this.http.get('../assets/data2.json')
            .map(response => response.json().globaldiscoveryentries);
   }



}
