import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  @Output() addTodoChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo){
    this.addTodoChange.next(todo);
  }

}
