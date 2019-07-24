import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoService} from "../../services/todo.service";


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo:Todo[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos =>{
      this.todo = todos;
    });
  }



  deleteTodo(todo: Todo){
    this.todo = this.todo.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
