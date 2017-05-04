import { Injectable } from '@angular/core';
import { Person } from '../person';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class PeopleService {
  getAll() : Person[] {
     return [
       {name: 'Luke Skywalker', height: 177, weight: 70},
       {name: 'Darth Vader', height: 200, weight: 100},
       {name: 'Han Solo', height: 185, weight: 85},
     ];
   }



//private baseUrl: string = 'http://swapi.co/api';
//Constructor
  constructor() { }

/*
  getAll(): Observable<Person[]>{
     let comments$ = this.http
       .get(`${this.baseUrl}/people`)
       .map((res:Response) => res.json())
       .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
       return comments$;
   }
*/


// other code

}
