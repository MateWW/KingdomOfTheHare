import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { HareBaseService } from '../hare-base.service';
import { Hare } from '../hare';


@Injectable()
export class ListControlerService {

  private hareList:[Hare];

  private sortedStream = new Subject();

  private sortDirectory = true;

  constructor( private hareBase:HareBaseService) { 

    hareBase.getHaresStream().subscribe((list)=>{
      this.hareList = <[Hare]>list;
      this.sortList();
    });

  }

  sortList( table = this.hareList){
    let copyList = table.slice();
    let output = [];
    let count = new Array();

    for(let i = 0; copyList[i]; i++)
      count[copyList[i].carrotAmount] != undefined ? count[copyList[i].carrotAmount]++ : count[copyList[i].carrotAmount] = 1 ;
   
    
    let previousElement = 0;
    for( let index in count){
      count[index] += previousElement ;
      previousElement = count[index];
    }
    
    for( let i = 0; copyList[i]; i++)
      {
        output[count[copyList[i].carrotAmount]-1] = copyList[i];
        --count[copyList[i].carrotAmount];
      }
    
    if( !this.sortDirectory )
      output.reverse();
    

    this.hareList = <[Hare]>output;
    this.sortedStream.next(output);
    return output;    
  }


  getSortedListStream(){
    return this.sortedStream.startWith(this.hareList);
  }

  changeSortDirectory(){
    this.sortDirectory = !this.sortDirectory;
    this.sortList();
  }


  deleteHare( hareName:string ){
    return this.hareBase.deleteHare(hareName);
  }

}
