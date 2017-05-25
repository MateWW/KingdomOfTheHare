import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { AddCarrotService } from './add-carrot.service';

import { Hare } from '../hare';

@Component({
  selector: 'app-add-carrot',
  templateUrl: './add-carrot.component.html',
  styleUrls: ['./add-carrot.component.css']
})
export class AddCarrotComponent implements OnInit {

  hare:Hare = { name:'' , carrotAmount:0 }

  constructor( private addCarrotService: AddCarrotService , private route:ActivatedRoute) {
    this.addCarrotService.getHareStream()
      .subscribe( (hare:Hare) =>{
          this.hare = hare;
      });
      
    this.resolveLink();
   }
  
  resolveLink(){
    this.route.params
      .subscribe( (value)=>{        
        if( typeof value.name !== 'undefined' ){
          this.addCarrotService.selectHare( value.name );
          return;
        }

        this.addCarrotService.selectHare( "" );
      });
  }

  ngOnInit() {
  }

}
