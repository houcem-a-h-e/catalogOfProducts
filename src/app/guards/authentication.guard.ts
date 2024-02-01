import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const loginService=inject(AuthenticationService);
  const router=inject(Router);
  if(loginService.isAuthenticated()){
   console.log(localStorage.getItem("authUser"));
   console.log("kee");
  }else {
   console.log("leeeeeeeeeee")
  }
   
    if(!loginService.isAuthenticated()){
      router.navigateByUrl('/login');
      return false;
    }else {
      return true;
    }
};
