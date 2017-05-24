import { Injectable } from '@angular/core';

import { HareBaseService } from '../hare-base.service';

@Injectable()
export class AddHareControllerService {

  constructor( private hareBase : HareBaseService) { }

  addHare( hareName:string ){
    return this.hareBase.addHare(hareName,0);
  }

}
