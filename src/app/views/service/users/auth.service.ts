import { Injectable } from '@angular/core';
import {User} from "../users/user";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  users : User[];

  constructor() {
  
  }

  login(email, password) : Observable<User>{
    let userAccepted = this.users
      .filter(x => x.email === email)
      .filter(y => y.password === password);
    if(userAccepted && userAccepted.length === 1){
      localStorage.setItem('currentUser', JSON.stringify({ token: "jwt will come later", email: userAccepted[0].email }));
      return Observable.call(userAccepted[0]);
    } else {
      return Observable.call(null);
    }
  }

  currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    return localStorage.removeItem('currentUser');
  }

}
