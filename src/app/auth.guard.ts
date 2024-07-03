import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuthenticatedUser: any;
  
  constructor (private authService: AuthGuard,
    private router:Router
  ){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      let response=true;
      console.log(this.authService.isAuthenticatedUser())

      if(!this.authService.isAuthenticatedUser()) {
        this.router.navigate(['/login']);
        response=false
      }

      return response;
  }
  
}
