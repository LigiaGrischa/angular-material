import { Component, OnInit } from '@angular/core';
import { ElementsService } from './elements.service';
import { Observable } from 'rxjs/Rx';
import { Nature } from './nature';
import { Discovery } from './discovery';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
  providers: [ElementsService]
})
export class ElementsComponent implements OnInit {
    // Local properties
    elements: Nature[];
    selectedElement: Nature;

  constructor(private elementsService : ElementsService) { }

  ngOnInit() {
    this.loadElements()
     //this.test = this.elementsService.getElements();
  }

  /**
  * This method returns the elements
  * @return json
  */
  loadElements() {
    // Get all comments
     this.elementsService.getElements()
                       .subscribe(
                           elements => this.elements = elements, //Bind to view
                            err => {
                                // Log errors if any
                                console.log(err);
                            });
  }
  /**
  * This method returns Select Person when clicking on li element
  * @param element
  */
  selectElement(element){
       this.selectedElement = element;
   }



}
