import { Component, OnInit } from '@angular/core';

export class TodoComponent {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetate: Date

  ) {}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  constructor() { }

  todos = [
    new TodoComponent(1, 'reading book', true, new Date()),
    new TodoComponent(2, 'playing songs', true, new Date()),
    new TodoComponent(3, 'watching movies', true, new Date())
    /* {id: 1, description: 'reading book'},
    {id: 2, description: 'playing songs'},
    {id: 3, description: 'watching movies'} */];

 /*  todo = {
    id: 1,
    description: 'Reading bookds'
  }; */

  ngOnInit() {
  }

}
