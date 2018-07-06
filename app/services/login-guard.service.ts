import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router'

@Injectable()
export class LoginGuardService implements CanActivate {

  canActivate(){
   this.router.navigate['/login'];
   return false;
  }
  constructor(private router : Router) { }

}
