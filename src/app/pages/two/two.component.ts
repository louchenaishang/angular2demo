import { Component, OnInit } from '@angular/core';
import {Todo} from "../../models/todo.model";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [TodoService]
})
export class TwoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.loadTodoListWithWrapper().then(todoItems => {
      this.todoItems1 = todoItems;
    });
    this.todoService.loadTodoList().then(todoItems => {
      this.todoItems2 = todoItems;
    });
  }

  todoItems1: Todo[];
  todoItems2: Todo[];
}
