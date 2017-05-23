import { TestBed, inject } from '@angular/core/testing';

import { HareBaseService } from './hare-base.service';

describe('HareBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HareBaseService]
    });
  });

  it('should ...', inject([HareBaseService], (service: HareBaseService) => {
    expect(service).toBeTruthy();
  }));
});
