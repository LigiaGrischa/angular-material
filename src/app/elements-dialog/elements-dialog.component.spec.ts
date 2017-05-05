import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsDialogComponent } from './elements-dialog.component';

describe('ElementsDialogComponent', () => {
  let component: ElementsDialogComponent;
  let fixture: ComponentFixture<ElementsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
