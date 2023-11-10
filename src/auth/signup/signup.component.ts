import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string = ''
  mail: string = ''
  pass: string = ''

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Nom:" + this.username)
    console.log("mail:" + this.mail)
    console.log("password:" + this.pass)
  }

}