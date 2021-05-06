import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { darkTheme } from '../darkTheme.service';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  localitem:string;
  theme:boolean;
  emptyImg:string = "";
  todosArray:Todo[];
  constructor(private darkThemeService:darkTheme) {

    this.darkThemeService.themeUpdated.subscribe(
      (currentTheme:boolean) => this.theme = currentTheme
      );

    this.localitem = localStorage.getItem("todos");
    if(this.localitem == null){
      this.todosArray = [];
    }else{
      this.todosArray = JSON.parse(this.localitem);
    }


    // this.todosArray = [
    //   {
    //     title:"Eid Shopping",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content",
    //     active:false
    //   },
    //   {
    //     title:"College assigment",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content",
    //     active:true
    //   },
    //   {
    //     title:"Exam paper solving",
    //     description:"Some quick example text to build on the card title and make up the bulk of the card content",
    //     active:false
    //   },
    //   {
    //     title:"Client Website UI design",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content ",
    //     active:true
    //   },
    //   {
    //     title:"Business Meeting with John",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content ",
    //     active:true
    //   },
    //   {
    //     title:"Cards Bill payment enquiry",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content ",
    //     active:true
    //   },
    //   {
    //     title:"Cards Bill payment enquiry",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content ",
    //     active:true
    //   },
    //   {
    //     title:"Cards Bill payment enquiry",
    //     description:" Some quick example text to build on the card title and make up the bulk of the card content ",
    //     active:true
    //   }
    // ]
   }

  ngOnInit(): void {
  }


  onTodoDelete(currentTodo:Todo){
    console.log(currentTodo);
    const index = this.todosArray.indexOf(currentTodo);
    this.todosArray.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todosArray));
  }


  onTodoComplete(currentTodo:Todo){
    console.log(currentTodo);
    const index = this.todosArray.indexOf(currentTodo);
    this.todosArray[index].active = !this.todosArray[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todosArray));
  }

  onAddtask(f:NgForm){
    const value = f.value;

    const AddTodo ={
      title:value.title,
      description:value.desc,
      active:true
    }
    this.todosArray.push(AddTodo);
    localStorage.setItem("todos",JSON.stringify(this.todosArray));
    f.reset();
  }
}
