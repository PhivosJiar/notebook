import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  todo : string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.hostoryItem();
  }

  hostoryItem(){
    this.todo=JSON.parse(localStorage.getItem('todolist')|| '{}');
  }


}
