import { Component, OnInit } from '@angular/core';
import { PlanetsService } from './planets.service';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material'

import {ViewContainerRef} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//components
import {PlanetsDetailComponent} from '../planets-detail/planets-detail.component';



@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css'],
  providers: [PlanetsService]
})
export class PlanetsComponent implements OnInit {

selectedOption: string;





  dialogRef: MdDialogRef<any>;

    constructor(public dialog: MdDialog) { }

    openDialog() {
      let dialogRef = this.dialog.open(PlanetsDetailComponent);
      dialogRef.afterClosed().subscribe(result => {
        this.selectedOption = result;
      });
    }
//ignore for now
  ngOnInit() {
  }


}


@Component({
  selector: 'dialog-result-example-dialog',
  template: '<h2>nooooo</h2><p>eccchhhhhhhhhhhht?</p>',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}
