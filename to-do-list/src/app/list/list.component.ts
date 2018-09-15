import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todo: Todo[] = [
    new Todo("buy book"),
    new Todo("do test"),
    new Todo("cook food")
  ];

  constructor() { }

  ngOnInit() {
  }

}
