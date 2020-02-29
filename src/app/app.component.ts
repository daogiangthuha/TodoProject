import { Component } from '@angular/core';

export interface Todo {
  title: string;
  isCompleted: boolean;
}
export interface TodoList {
  todos: Array<Todo>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList: TodoList = {
    todos: [
      {
        title: 'Do exercises',
        isCompleted: false
      },
      {
        title: 'Learn English',
        isCompleted: true
      }
    ]
  };

  addTodo(todo){
    this.todoList.todos.push({
      title: todo,
      isCompleted: false
    });
  }
}
