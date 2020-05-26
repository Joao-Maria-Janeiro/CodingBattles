import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShareData {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  currentLog = this.isLoggedIn.asObservable();

  private usernameSource = new BehaviorSubject<string>("");
  currentUsername = this.usernameSource.asObservable();

  constructor() {}

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }

  changeUserLogin(isloggedin: boolean) {
    this.isLoggedIn.next(isloggedin);
  }

}
