import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  constructor() {}
  loginSuccess = false
  private isauthenticationstatus = false;

  Login(username: string, password: string){
    if(username !== null && password !== null){
      this.isauthenticationstatus = true;
      console.log('login successful');
      return true;
    }
    return false;
  };

  logout(): void {
    this.isauthenticationstatus = false;
  };

  isAuthenticated(): boolean{
    return this.isauthenticationstatus;
  };



}
