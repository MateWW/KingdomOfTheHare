import { TestBed, inject } from '@angular/core/testing';

import { AddHareControllerService } from './add-hare-controller.service';

describe('AddHareControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddHareControllerService]
    });
  });

  it('should ...', inject([AddHareControllerService], (service: AddHareControllerService) => {
    expect(service).toBeTruthy();
  }));
});
