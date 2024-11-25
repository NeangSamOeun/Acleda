import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { ServiceLoginService } from "../service/service-login.service";

@Injectable({
  providedIn: 'root',
})
 
export class authGuard implements CanActivate{
  
  constructor(private serviceLgin: ServiceLoginService, private route: Router){}
  canActivate(): boolean {
    if(this.serviceLgin.isAuthenticated()){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
  }


}
