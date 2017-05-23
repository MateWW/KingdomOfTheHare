import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarrotComponent } from './add-carrot.component';

describe('AddCarrotComponent', () => {
  let component: AddCarrotComponent;
  let fixture: ComponentFixture<AddCarrotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarrotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarrotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
