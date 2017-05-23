import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCarrotRoutingModule } from './add-carrot-routing.module'

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
  ]
})
export class AddCarrotModule { }
