import { Component, OnInit } from '@angular/core';
import { HardCodedAuthentificationService } from '../Service/hard-coded-authentification.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutUser: HardCodedAuthentificationService) { }

  ngOnInit() {
    this.logoutUser.logoutUser();
  }

}
