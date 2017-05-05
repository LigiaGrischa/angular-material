import { Component, OnInit, Input } from '@angular/core';
import {MdDialogRef, MdDialog} from '@angular/material';
import { Nature } from '../elements/nature';

@Component({
  selector: 'app-elements-dialog',
  templateUrl: './elements-dialog.component.html',
  styleUrls: ['./elements-dialog.component.css']
})
export class ElementsDialogComponent implements OnInit {
@Input() element : Nature;

tiles = [
  {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
];

  public title: string;
  public message: string;
  public myElement: Nature;

  constructor(public dialogRef: MdDialogRef<ElementsDialogComponent>) {}

  ngOnInit() {}

}
