import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AddHareModule } from './add-hare/add-hare.module';
import { AddCarrotModule } from './add-carrot/add-carrot.module';
import { ListModule } from './list/list.module';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AddHareModule,
    ListModule,
    AddCarrotModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
