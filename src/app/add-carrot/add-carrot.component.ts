import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-carrot',
  templateUrl: './add-carrot.component.html',
  styleUrls: ['./add-carrot.component.css']
})
export class AddCarrotComponent implements OnInit {

  private name = "Zyzia";
  private carrotAmount = 6124;

  constructor() { }

  ngOnInit() {
  }

}
