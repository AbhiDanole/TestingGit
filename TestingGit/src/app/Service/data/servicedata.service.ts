import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {

  constructor() { }

  getwelcomefromsevice()    {
    console.log('backend service');
  }
}
