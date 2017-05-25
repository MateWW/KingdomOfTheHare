import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hare } from '../hare';

import { ListControlerService } from './list-controler.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list:[Hare];


  constructor( private listControler:ListControlerService , private router:Router) { 
  }

  ngOnInit() {
    this.listControler.getSortedListStream()
      .subscribe( ( sortedList ) =>{
        this.list = <[Hare]>sortedList;
      });
  }

  changeSortDirectory() {
    this.listControler.changeSortDirectory();
  }

  deleteHare( name : string){
    this.listControler.deleteHare(name);
  }

  redirectToDetails( hareName:string ){
    this.router.navigate(['/addCarrot', hareName]);
  }

}
