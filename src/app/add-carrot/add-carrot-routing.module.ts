import { NgModule } from '@angular/core';

import { RouterModule, Routes  } from '@angular/router';

import { AddCarrotComponent } from './add-carrot.component';

const addCarrotRoutes:Routes = [
  { path: 'addCarrot/:name', component: AddCarrotComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(addCarrotRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AddCarrotRoutingModule { }
