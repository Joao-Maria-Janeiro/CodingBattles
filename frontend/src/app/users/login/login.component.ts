import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { ShareData } from "../../shareData";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = "";
  password : string = "";
  error : string = "";
  username : string;

  constructor(
    private userService : UserService,
    private shareService : ShareData,
    ) { }

  ngOnInit(): void {
    this.shareService.currentUsername.subscribe(username => this.username = username)
  }

  login() : void {
    console.log(this.email);
    console.log(this.password);
    if(this.email.length == 0) {
      this.error = "You must provide an email";
      return;
    } else if(this.password.length == 0) {
      this.error = "You must provide a password";
      return;
    } else {
        this.userService.login(this.email, this.password).subscribe(result => {
          console.log("Error:");
          console.log(result['error']);
          this.error = result['error'];
          if(this.error.length == 0) {
            window.localStorage['user_token'] = result['token'];
            window.localStorage['username'] = result['username'];
            //TODO: redirect to main or previous component
            this.shareService.changeUsername(result['username']);
            console.log("login" + result['username'] + "  " + this.username);
          }
        }); 
    }
  }

}
