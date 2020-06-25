import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthentificationService {

  constructor() { }

  authenticate(username, password)      {
    console.log('before ' + this.isUserLoggedIn());
    if (username === 'Abhishek' && password === 'dummy')   {
      sessionStorage.setItem('authentication', username);
      console.log('After ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authentication');
    return !(user === null);
  }

  logoutUser() {
     sessionStorage.removeItem('authentication')
  }
}
