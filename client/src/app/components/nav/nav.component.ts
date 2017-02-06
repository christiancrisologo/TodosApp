import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentRoute:string = "/home";

  routerLinks:any[]=[
    "/home",
    "/todos",
    "/about"
  ]; 


  constructor(private _router: Router) { 
    this._router.events.subscribe((r:any)=> {
        this.currentRoute = r.url;
      } );
  }

  ngOnInit() {
  }

}
