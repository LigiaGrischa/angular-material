import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Nature } from './nature';
import { Discovery } from './discovery';


@Injectable()
export class ElementsService {

private baseUrl: string = 'http://localhost:8080/admin/v1/';

  constructor(private http:Http) { }

  /**
  * This method is used to return all elements from a json
  * @return json This returns the json from the REST API
  */
  getElements(): Observable<Nature[]> {
          // ...calling .json() on the response to return data
          return this.http.get('../assets/data3.json')
                    .map(response => response.json().globaldiscoveryentries)
                            //...errors if any
                           .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }
    /**
    * This method is used to return a Service by ID
    * @return json This returns the json from the REST API
    */
    getElementById(id): Observable<Nature[]> {
            // ...calling .json() on the response to return data
            return this.http.get(`${this.baseUrl}/people/123`)
                             .map(response => response.json());
        }

    /**
    * This method is used to add a new Service
    * @param object
    */
   addElement (body: Object): Observable<Nature[]> {
           let bodyString = JSON.stringify(body); // Stringify payload
           let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
           let options       = new RequestOptions({ headers: headers }); // Create a request option

           return this.http.post(this.baseUrl, body, options) // ...using post request
                            .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                            .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
       }







}
