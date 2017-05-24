import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarrotComponent } from './add-carrot.component';
import { AddCarrotFormComponent } from './add-carrot-form.component';

describe('AddCarrotComponent', () => {
  let component: AddCarrotComponent;
  let fixture: ComponentFixture<AddCarrotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarrotComponent, AddCarrotFormComponent ]
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
