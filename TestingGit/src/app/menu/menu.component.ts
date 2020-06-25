import { Component, OnInit } from '@angular/core';
import { HardCodedAuthentificationService } from '../Service/hard-coded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private hardCodedAuthetification: HardCodedAuthentificationService) { }

  ngOnInit() {
  }

}
