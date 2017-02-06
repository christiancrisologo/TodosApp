import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { TodoService, ITodo } from "../../../services/todo.service"
import { GATEWAYS } from "../../../constants";

@Component({
  selector: 'todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.scss']
})
export class TodoTableComponent implements OnInit, OnChanges {

  dataprovider: ITodo[];
  @Input() reloadTable: boolean = false;
  
  activeItem:ITodo;
  editmode:boolean = false;

  constructor(private _todoService: TodoService) {

  }

  ngOnInit() {
    this.reload();
  }

  reload(): void {
    this._todoService.getTodos().subscribe((resp: ITodo[]) => {
      this.dataprovider = resp;
    })
  }

  ngOnChanges(changeValue: any) {
    if (changeValue.hasOwnProperty('reloadTable') && changeValue.reloadTable.currentValue) {
      this.reload();
    }
  }

  editTodo(item:ITodo):void{

  }

  deleteTodo(item:ITodo): void {
     this._todoService.deleteTodos(item).subscribe((resp: ITodo[]) => {
      this.reload();
    });
  }

  saveTodo(item:ITodo):void{
     this._todoService.editTodo(item).subscribe((resp: ITodo[]) => {
      //this.reload();
    });
  }

}
