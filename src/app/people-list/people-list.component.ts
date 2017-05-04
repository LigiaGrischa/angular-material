import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from './people.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
  providers: [PeopleService]
})
export class PeopleListComponent implements OnInit {
  //Variablen
  people: Person[] = [];
  selectedPerson: Person;
  //Constructor
  constructor(private _peopleService : PeopleService){
  }
 //takes complexity away from the constructor
  ngOnInit() {
    this.people = this._peopleService.getAll();
  }
  //Select Person when clicking on li element
  selectPerson(person){
       this.selectedPerson = person;
   }


}
