import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent }   from './components/todos/todos.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'todos',  component: TodosComponent },
  { path: 'todo',  component: TodosComponent },
  { path: 'home',  component:  HomeComponent},
  { path: 'about',  component:  AboutComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
