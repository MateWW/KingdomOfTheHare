import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ListComponent } from './list.component';

import { ListControlerService } from './list-controler.service';
import { HareBaseService } from '../hare-base.service';

class RouterStub {
  navigate(url) { return url; }
}


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let hareBaseService:HareBaseService;

  beforeEach(async(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [
        ListControlerService,
        HareBaseService,
        { provide: Router, useClass : RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    hareBaseService = TestBed.get(HareBaseService);
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
