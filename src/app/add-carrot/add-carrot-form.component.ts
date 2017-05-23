import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-carrot-form',
  template: `
    <form>
      <div class="d-flex" *ngFor="let buttonValue of valuesOfButtons" >
        <button class='btn' type='button' (click)="buttonClick(-buttonValue)">
          {{-buttonValue}}
        </button>
        <button class='btn' type='button' (click)="buttonClick(buttonValue)">
          {{buttonValue}}
        </button>
      </div>
    </form>
  `,
  styles: [`
    .btn{
      width:50%;
      margin: .2rem .5rem;
      cursor: pointer;
      transition: all .2s;
    }
    .btn:hover{
      box-shadow: 0 0 20px #777777;
    }
  `]
})
export class AddCarrotFormComponent implements OnInit {

  private valuesOfButtons:[Number] = [1,2,5,10,20,50];

  constructor() { }

  ngOnInit() {
  }

  buttonClick( value:Number ){
    console.log( value )
  }

}
