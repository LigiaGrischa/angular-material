import { Component, OnInit } from '@angular/core';
import { ElementsService } from './elements.service';
import { Observable } from 'rxjs/Rx';
import { Nature } from './nature';
import { Discovery } from './discovery';
import { DialogService } from '../elements-dialog/dialog.service';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

//components
import { ElementsDialogComponent } from '../elements-dialog/elements-dialog.component';

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
    //for Dialog
    public result: any;
    selectedOption: string;

  constructor(private elementsService : ElementsService, private dialogsService: DialogService) { }

  ngOnInit() {
    this.loadElements()
     //this.test = this.elementsService.getElements();
  }
  /**
  * This method ...
  * @return dialog
  */
  public openDialog(element) {
    //Flag for Details
    this.selectedElement = element;
    //use Service
    this.dialogsService
      .confirm('Details', 'Are you sure you want to do this?', element)
      .subscribe(res => this.result = res);
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
