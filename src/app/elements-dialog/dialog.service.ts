import { Observable } from 'rxjs/Rx';
import { ElementsDialogComponent } from './elements-dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { Nature } from '../elements/nature';


@Injectable()
export class DialogService {

  constructor(private dialog: MdDialog) { }


  public confirm(title: string, message: string, element: Nature): Observable<boolean> {

         let dialogRef: MdDialogRef<ElementsDialogComponent>;

         dialogRef = this.dialog.open(ElementsDialogComponent);
         dialogRef.componentInstance.title = title;
         dialogRef.componentInstance.message = message;
         dialogRef.componentInstance.myElement = element;

         return dialogRef.afterClosed();
       }


}
