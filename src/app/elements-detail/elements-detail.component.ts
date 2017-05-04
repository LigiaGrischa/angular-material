import { Component, OnInit, Input } from '@angular/core';
import { Nature } from '../elements/nature';

@Component({
  selector: 'app-elements-detail',
  templateUrl: './elements-detail.component.html',
  styleUrls: ['./elements-detail.component.css']
})
export class ElementsDetailComponent implements OnInit {
@Input() element : Nature;

  constructor() { }

  ngOnInit() {
  }

}
