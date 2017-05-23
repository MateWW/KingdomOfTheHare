import { NgModule } from '@angular/core';

import { RouterModule, Routes  } from '@angular/router';

import { AddHareComponent } from './add-hare.component';

const addHareRoutes:Routes = [
  { path: 'addHare', component: AddHareComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(addHareRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddHareRoutingModule { }
