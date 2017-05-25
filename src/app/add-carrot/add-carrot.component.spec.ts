import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { AddCarrotComponent } from './add-carrot.component';
import { AddCarrotFormComponent } from './add-carrot-form.component';

import { AddCarrotService } from './add-carrot.service';
import { HareBaseService } from '../hare-base.service';

class RouterStub {
  navigate(url) { return url; }
}

class ActiveRouteStub{

  params = {
    subscribe : () => ({name:"testHare"})
  }
}


describe('AddCarrotComponent', () => {
  let component: AddCarrotComponent;
  let fixture: ComponentFixture<AddCarrotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCarrotComponent, AddCarrotFormComponent ],
      providers: [
        AddCarrotService,
        HareBaseService,
        { provide: Router, useClass : RouterStub },
        { provide: ActivatedRoute, useClass : ActiveRouteStub }
        
      ]
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
