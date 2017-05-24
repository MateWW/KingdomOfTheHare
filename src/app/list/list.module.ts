import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';

import { ListComponent } from './list.component';

import { HareBaseService } from '../hare-base.service';
import { ListControlerService } from './list-controler.service';


@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule
  ],
  declarations: [
    ListComponent
  ],
  providers:[
    ListControlerService,
    HareBaseService
  ]
})
export class ListModule { }
