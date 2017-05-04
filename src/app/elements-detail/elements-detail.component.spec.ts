import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsDetailComponent } from './elements-detail.component';

describe('ElementsDetailComponent', () => {
  let component: ElementsDetailComponent;
  let fixture: ComponentFixture<ElementsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
