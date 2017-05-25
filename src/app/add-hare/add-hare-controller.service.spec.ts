import { TestBed, inject } from '@angular/core/testing';

import { AddHareControllerService } from './add-hare-controller.service';
import { HareBaseService } from '../hare-base.service';

describe('AddHareControllerService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        AddHareControllerService,
        HareBaseService
      ]
    });
  });

  it('should add new hare', inject([AddHareControllerService], (service: AddHareControllerService) => {   
    expect( service.addHare("test hare") ).toBeTruthy();
    expect( service.addHare("test hare") ).toBeFalsy();
  }));
});
