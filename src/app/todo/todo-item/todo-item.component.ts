import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { darkTheme } from 'src/app/darkTheme.service';
import { Todo } from '../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  theme:boolean;
  constructor(private darkThemeService:darkTheme) { 
    this.darkThemeService.themeUpdated.subscribe(
      (currentTheme:boolean) => this.theme = currentTheme
      );

  }

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
