import { TestBed, inject } from '@angular/core/testing';

import { ListControlerService } from './list-controler.service';

describe('ListControlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListControlerService]
    });
  });

  it('should ...', inject([ListControlerService], (service: ListControlerService) => {
    expect(service).toBeTruthy();
  }));
});
