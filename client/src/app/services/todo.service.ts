import { Injectable } from '@angular/core';
import { Http,Headers , RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from "rxjs";
import {GATEWAYS} from "../constants";

@Injectable()
export class TodoService {

  constructor(private _http: Http) { }

  public getTodos(): Observable<ITodo[]> {
    
    return this._http.get(GATEWAYS.GET_ALL_TODO)
      .map(
      res => res.json()
      )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public addTodos(body:any): Observable<ITodo[]> {
        let options       = this.getRequestOptions();
    return this._http.post(GATEWAYS.GET_ALL_TODO, JSON.stringify( body ), options)
      .map(
      res => res.json()
      )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public deleteTodos(body:any): Observable<ITodo[]> {
    let options       = this.getRequestOptions();
    return this._http.delete(GATEWAYS.DELETE_TODO + body._id,options)
      .map(
      res => res.json()
      )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public editTodo(body:any): Observable<ITodo[]> {
    let options       = this.getRequestOptions();
    return this._http.put(GATEWAYS.DELETE_TODO , JSON.stringify( body ),options)
      .map(
      res => res.json()
      )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  public getRequestOptions():RequestOptions{ 
    return new RequestOptions({headers: new Headers({ 'Content-Type': 'application/json' }) });
  }
}


export interface ITodo{
  subject:string;
  status:string;
  id:string;
  createddate:string;
  finishdate:string;
  notes:string;
  _id:string;
}