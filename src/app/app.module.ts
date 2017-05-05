import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

import { ElementsComponent } from './elements/elements.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { ElementsDetailComponent } from './elements-detail/elements-detail.component';
import { MdDataTableModule } from 'ng2-md-datatable';

import { MdDialogModule } from '@angular/material';
//testit
import {ViewContainerRef} from '@angular/core'
import {MdButtonModule } from '@angular/material';
//loadElements
import {ReactiveFormsModule} from '@angular/forms';

//Components
import { ElementsDialogComponent } from './elements-dialog/elements-dialog.component';
//Services
import { DialogService } from './elements-dialog/dialog.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    ElementsComponent,
    PlanetsComponent,
    PlanetsDetailComponent,
    ElementsDetailComponent,
    ElementsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdDataTableModule,
    MdDialogModule,
    MdButtonModule,
    MaterialModule,
    MaterialModule.forRoot()
  ],
  exports: [
    ElementsDialogComponent,
  ],
  entryComponents: [
   PlanetsDetailComponent,
   ElementsDialogComponent
 ],
  providers: [DialogService,],
  bootstrap: [AppComponent]
})
export class AppModule {}
