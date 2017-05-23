import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHareComponent } from './add-hare.component';

describe('AddHareComponent', () => {
  let component: AddHareComponent;
  let fixture: ComponentFixture<AddHareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
