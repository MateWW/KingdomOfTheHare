import { TestBed, inject } from '@angular/core/testing';

import { AddCarrotService } from './add-carrot.service';

describe('AddCarrotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCarrotService]
    });
  });

  it('should ...', inject([AddCarrotService], (service: AddCarrotService) => {
    expect(service).toBeTruthy();
  }));
});
