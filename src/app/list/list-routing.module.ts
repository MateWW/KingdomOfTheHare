import { NgModule } from '@angular/core';

import { RouterModule, Routes  } from '@angular/router';

import { ListComponent } from './list.component';

const listRoutes:Routes = [
  { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(listRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListRoutingModule { }
