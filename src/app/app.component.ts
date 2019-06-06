import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router, CanActivate } from '@angular/router';
@Component({
  moduleId: "module.id",
  selector: 'app-my-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  public showSideBar = true;
  activeClassBool = false;
  compCommunicateSubscription: Subscription;
  
  constructor(
    router: Router ) {
   }

  ngOnInit() {
  }

  private isShowSideBar() {
    console.log(this.showSideBar);
    return this.showSideBar;
  }

  handleClientLoad() {
    console.log("handle client load 1");
  }
};