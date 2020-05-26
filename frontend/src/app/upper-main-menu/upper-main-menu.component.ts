import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subject } from "rxjs";
import { share } from 'rxjs/operators';
import { ShareData } from "../shareData";

@Component({
  selector: 'app-upper-main-menu',
  templateUrl: './upper-main-menu.component.html',
  styleUrls: ['./upper-main-menu.component.css']
})
export class UpperMainMenuComponent implements OnInit {

  username : string;
  islogged : boolean;

  constructor(
    private sharedService: ShareData
  ) {

  }

  ngOnInit() {
  this.sharedService.currentUsername.subscribe(username => this.username = username);
    this.sharedService.currentLog.subscribe(isLoggedIn => this.islogged = isLoggedIn);
    window.localStorage.getItem('user_token') == null ? (this.islogged = false) : (this.islogged = true);
    if(this.islogged) {
      this.username = window.localStorage.getItem('username');
    }
  }

  /*isLogged() : boolean {
    this.sharedService.currentLog.subscribe(isLoggedIn => this.islogged = isLoggedIn);
    return this.islogged;
  }*/

}
