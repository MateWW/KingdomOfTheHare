import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { HareBaseService } from '../hare-base.service';

import { Hare } from '../hare';

@Injectable()
export class AddCarrotService {


  private selectedHareName:string;

  private hare:Hare;
  private hareList:[Hare];

  private hareStream = new Subject();

  constructor( private hareBase: HareBaseService , private router:Router) { 
    this.hareBase.getHaresStream()
      .subscribe( (hareList:[Hare]) => {
        this.hareList = hareList;
        this.findHare();
      });
  }

  findHare(){
    if( !this.selectedHareName )
      return false;
    
    if( !this.hareList )
      return false;

    let hare = this.hareList.find( (hareObj) => (hareObj.name === this.selectedHareName)  );
    if(!hare){
      this.router.navigate(["/list"]);
      return false;
    }
    this.hareStream.next(hare);
    return true;
}

  getHareStream(){
    let emptyHareProfile:Hare = {name:'',carrotAmount:0};
    return this.hareStream.startWith(this.hare || emptyHareProfile);
  }

  selectHare( name:string ){
    this.selectedHareName = name;    
    return this.findHare();
  }

  changeCarrotAmount( amount:number ){
    if(!this.selectedHareName)
      return false;

    if(amount>0)
      this.hareBase.addCarrots( this.selectedHareName , amount );
    else 
      this.hareBase.deleteCarrots( this.selectedHareName , Math.abs(amount) );
    
    return true;
  }

}
