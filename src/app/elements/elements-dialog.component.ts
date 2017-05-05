import { Component, OnInit } from '@angular/core';
import {MdDialogRef, MdDialog} from '@angular/material';

@Component({
  selector: 'app-elements-dialog',
  templateUrl: './elements-dialog.component.html',
  styleUrls: ['./elements-dialog.component.css']
})
export class ElementsDialogComponent implements OnInit {

public title: string;
public message: string;

  constructor(public dialogRef: MdDialogRef<any>) { }

  ngOnInit() {
  }

}
