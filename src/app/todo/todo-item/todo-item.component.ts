import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() todo:Todo;
  @Output() todoDelete: EventEmitter<Todo>= new EventEmitter();
  @Output() todoComplete: EventEmitter<Todo>= new EventEmitter();

  ngOnInit(): void {
    
  }

  onDelete(currentTodo:Todo){
    // console.log(currentTodo);
    this.todoDelete.emit(currentTodo);
  }

  onCompleted(currentTodo:Todo){
    this.todoComplete.emit(currentTodo);
  }
  

}
