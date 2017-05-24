import { TestBed, inject } from '@angular/core/testing';

import { Hare } from '../hare';

import { ListControlerService } from './list-controler.service';
import { HareBaseService } from '../hare-base.service';

describe('ListControlerService', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        ListControlerService,
        HareBaseService
      ]
    });


  });

  it('should sort it great', inject([ListControlerService], (service: ListControlerService) => {
    let table:[Hare] = <[Hare]>[];

    for( let i = 0 ; i < 19995; i++)
    {
      table.push({name:"testy 2",carrotAmount:9999});
    }

    table.push({name:"atesty21 2",carrotAmount:1});
    table.push({name:"testya 2",carrotAmount:5});
    table.push({name:"testyfas 2",carrotAmount:110});
    table.push({name:"testysadas 2",carrotAmount:2000});
    table.push({name:"ssstesty 2",carrotAmount:2200});


    let output = service.sortList(table);
    for( let i=0; i<5;i++)
      expect( output[0+i] ).toEqual( table[19995+i] )

  }));
});
