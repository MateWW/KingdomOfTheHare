import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Hare } from '../hare';

import { AddCarrotService } from './add-carrot.service';
import { HareBaseService } from '../hare-base.service';

class RouterStub {
  navigate(url) { return url; }
}

describe('AddCarrotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddCarrotService,
        HareBaseService,
        { provide: Router, useClass : RouterStub }
      ]
    });
  });

  it('should select hare', inject([AddCarrotService,HareBaseService], (service: AddCarrotService,hareBase: HareBaseService) => {

    service.getHareStream()
      .subscribe(( hare:Hare ) => {
        if(hare.name != '')
          expect(hare.name).toContain('test hare');
      });

    let selectNotExisting = service.selectHare('test hare');
    expect(selectNotExisting).toBeFalsy();    

    hareBase.addHare('test hare',200);
    let selectExisting = service.selectHare('test hare');
    expect(selectExisting).toBeTruthy();
  }));

  it('should add 50 and delete 55 carrots', inject([AddCarrotService,HareBaseService], (service: AddCarrotService,hareBase: HareBaseService) => {
    let expectedValue = 0;
    service.getHareStream()
      .subscribe( ( hare:Hare) => {
        if(expectedValue == 0)
          expect(hare.carrotAmount).toBeGreaterThanOrEqual(0);
        else 
          expect(hare.carrotAmount).toEqual(expectedValue);
      });
    
    service.selectHare('test hare');

    expectedValue = 100;
    let succesChange = service.changeCarrotAmount(-100);
    expect(succesChange).toBeTruthy();

    expectedValue = 0;
    succesChange = service.changeCarrotAmount(-200);
    expect(succesChange).toBeTruthy();

    expectedValue = 50
    succesChange = service.changeCarrotAmount(50);
    expect(succesChange).toBeTruthy();
  }));
});
