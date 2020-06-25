import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicedataService } from '../Service/data/servicedata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = '';
  constructor(private route: ActivatedRoute, private service: ServicedataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }

  getwelcomeemessage() {
   // console.log('in welcome ts');
    this.service.getwelcomefromsevice();
  }

  getMapdetails(){
    
  }

}
