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

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    ElementsComponent,
    PlanetsComponent,
    PlanetsDetailComponent,
    ElementsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
