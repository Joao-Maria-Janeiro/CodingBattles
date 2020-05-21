import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../user.service';
import {FormControl} from '@angular/forms';


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
  languagesControl = new FormControl();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllLanguages().subscribe(languages => {
      languages.forEach(language => {
        this.languages.push(language['name'])
      });
    });
    console.log(this.languages);
  }

}
