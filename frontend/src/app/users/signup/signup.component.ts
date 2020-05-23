import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user : User = {
    username: "",
    password: "",
    email: "",
    favourite_language: "",
    ocupation: "",
    company: "",
    languages: [],
    first_name: "",
    last_name: ""
  };
  languages : string[] = [];
  password2 : string = "";
  error : string;
  successfulSignup: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllLanguages().subscribe(languages => {
      languages.forEach(language => {
        this.languages.push(language['name'])
      });
    });
  }

  submitUserData(f: NgForm) : void {
    if((this.user.favourite_language.length != 0) && (this.user.languages.length != 0)) {
      if(this.user.password != this.password2) {
        this.error = "Passwords must match";
      } else {
        this.userService.signup(this.user).subscribe(signup_error => {
          if(signup_error['error'] == '') {
            this.successfulSignup = true;
          } 
          this.error = signup_error['error'];
        });
      }
    }
  }

}
