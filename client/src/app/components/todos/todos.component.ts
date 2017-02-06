import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  

  selectedStatus = "STATUS";
  todoSubject = "";
  triggerReloadTable:boolean = false;

  constructor(private _todoService:TodoService) { }

  ngOnInit() {
  }

  addTodo(e:any):void{
    e.preventDefault();
    let newTodo = {
      subject: this.todoSubject,
      createddate: new Date().toISOString().slice(0,10),
      notes:"nothing",
      status: this.selectedStatus==="STATUS" ? "" : this.selectedStatus
    }

    this._todoService.addTodos(newTodo).subscribe( res=>{
      this.todoSubject = "";
      this.selectedStatus = "STATUS";
      this.triggerReloadTable = true;
    });

  }

}
