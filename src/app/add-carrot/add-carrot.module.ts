import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarrotRoutingModule } from './add-carrot-routing.module'

import { AddCarrotService } from './add-carrot.service';
import { HareBaseService } from '../hare-base.service';

import { AddCarrotComponent } from './add-carrot.component';
import { AddCarrotFormComponent } from './add-carrot-form.component';


@NgModule({
  imports: [
    CommonModule,
    AddCarrotRoutingModule
  ],
  declarations: [
    AddCarrotComponent,
    AddCarrotFormComponent
  ],
  providers:[
    AddCarrotService,
    HareBaseService
  ]
})
export class AddCarrotModule { }
