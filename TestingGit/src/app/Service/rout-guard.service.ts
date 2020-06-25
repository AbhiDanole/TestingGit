import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardCodedAuthentificationService } from './hard-coded-authentification.service';

@Injectable({
  providedIn: 'root'
})
export class RoutGuardService implements CanActivate {

  constructor(private hardcodedauthentication: HardCodedAuthentificationService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedauthentication.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
