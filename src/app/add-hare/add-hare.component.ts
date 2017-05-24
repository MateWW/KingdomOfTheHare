import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

import { AddHareControllerService } from './add-hare-controller.service';

@Component({
  selector: 'app-add-hare',
  templateUrl: './add-hare.component.html',
  styleUrls: ['./add-hare.component.css']
})
export class AddHareComponent implements OnInit {

  hareName:string;

  onSubmitError:boolean = false;
  successAdd:boolean = false;

  constructor( private addHareController : AddHareControllerService) { }

  ngOnInit() {
  }

  onSubmit(name:NgModel){
    if( !name.valid ){
      this.onSubmitError = true;
      return;
    }

    if(this.addHareController.addHare(name.value)){
      this.onSubmitError = false;
      this.successAdd = true;
    }
    else {
      this.onSubmitError = true;
    }
  }

}
