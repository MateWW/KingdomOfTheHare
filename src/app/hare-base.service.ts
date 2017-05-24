import { Injectable } from '@angular/core';
import { Subject , Observable } from 'rxjs';

import { HareDataBase } from './hare-database';


@Injectable()
export class HareBaseService {

  private base:HareDataBase;

  private haresStream = new Subject();

  constructor() {
    this.base = new HareDataBase();
  }

  getHares(){
    return this.base.getHares();
  }
  
  addHare( name:string , carotAmount:number ){
    let addHareReturn = this.base.addHare(name,carotAmount);    

    this.haresStream.next(this.getHares());

    return addHareReturn;
  }

  deleteHare( name:string ){
    let deleteHareReturn = this.base.deleteHare( name );

    this.haresStream.next(this.getHares());

    return deleteHareReturn;
  }

  addCarrots( name:string , amount:number )
  {
    let hare = this.base.getHare(name);

    if( !hare )
      return false;

    let newCarrotAmount = hare.carrotAmount+amount;
    this.base.setCarrot( name , newCarrotAmount );

    this.haresStream.next(this.getHares());

    return true;
  }
  
  deleteCarrots ( name:string , amount:number )
  {
    let hare = this.base.getHare(name);
    
    if( !hare )
      return false;
    
    let newCarrotAmount = hare.carrotAmount-amount;

    if( newCarrotAmount < 0 )
      newCarrotAmount = 0;

    this.base.setCarrot( name , newCarrotAmount );

    this.haresStream.next(this.getHares());

    return true;  
  }


  getHaresStream(){
    return this.haresStream.startWith(this.getHares());
  }

}
