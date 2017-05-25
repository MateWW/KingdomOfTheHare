import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';


import { AddCarrotFormComponent } from './add-carrot-form.component';
import { AddCarrotService } from './add-carrot.service';
import { HareBaseService } from '../hare-base.service';

class RouterStub {
  navigate(url) { return url; }
}

describe('AddCarrotFormComponent', () => {
  let component: AddCarrotFormComponent;
  let fixture: ComponentFixture<AddCarrotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarrotFormComponent ],
      providers: [ 
        AddCarrotService,
        HareBaseService,
        { provide: Router, useClass : RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCarrotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
