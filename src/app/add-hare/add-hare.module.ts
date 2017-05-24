import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddHareRoutingModule } from './add-hare-routing.module'
 
import { AddHareControllerService } from './add-hare-controller.service';
import { HareBaseService } from '../hare-base.service';


import { AddHareComponent } from './add-hare.component';

@NgModule({
  imports: [
    CommonModule,
    AddHareRoutingModule,
    FormsModule
  ],
  declarations: [
    AddHareComponent
  ],
  providers:[
    HareBaseService,
    AddHareControllerService
  ]
})
export class AddHareModule { }
