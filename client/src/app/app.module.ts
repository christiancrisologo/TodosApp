import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoTableComponent } from './components/todos/todotable/todotable.component';
import { HomeComponent } from './components/home/home.component';

import {AppRoutingModule} from "./app.routing.module";
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';

import {TodoService} from "../app/services/todo.service";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoTableComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
