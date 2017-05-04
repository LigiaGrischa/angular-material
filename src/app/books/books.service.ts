import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class BooksService {

private baseUrl: string = 'http://swapi.co/api';

  constructor(private http : Http) {
    // Methods using the http object
   }

   getBooks() {
     let books$ = this.http
     .get(`${this.baseUrl}/people`)
     .map(res => res.json());
      return books$;
   }



}
