import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AddHareControllerService } from './add-hare-controller.service';
import { HareBaseService } from '../hare-base.service';

import { AddHareComponent } from './add-hare.component';

describe('AddHareComponent', () => {
  let component: AddHareComponent;
  let fixture: ComponentFixture<AddHareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AddHareComponent ],
      providers: [
        AddHareControllerService,
        HareBaseService
      ]
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
