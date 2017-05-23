import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHareRoutingModule } from './add-hare-routing.module'
 
import { AddHareComponent } from './add-hare.component';

@NgModule({
  imports: [
    CommonModule,
    AddHareRoutingModule
  ],
  declarations: [
    AddHareComponent
  ]
})
export class AddHareModule { }
