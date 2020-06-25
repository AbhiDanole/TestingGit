import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthentificationService } from '../Service/hard-coded-authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Abhishek';
  password = '';
  errormsg = 'Invalid credientials';
  invalid = false;

  constructor(private router: Router , private hardCodedAuthentificationService: HardCodedAuthentificationService) { }

  ngOnInit() {
  }

  console() {
    if (this.hardCodedAuthentificationService.authenticate(this.username, this.password)) {
      // if (this.username === 'Abhishek' && this.password === 'dummy') {
        this.invalid = false;
        this.router.navigate(['welcome', this.username]);
        console.log(this.invalid);
      } else {
        this.invalid = true;
        console.log(this.invalid);
      }

  }

}
