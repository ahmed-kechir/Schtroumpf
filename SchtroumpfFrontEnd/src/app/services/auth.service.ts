import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuth = false;
  constructor(private router: Router) { }
  isAuth (){
    
    const b = JSON.parse(localStorage.getItem('auth'))
    if(b) return b.auth
    else return false
    
  }
  login(){
    localStorage.setItem('auth', JSON.stringify({auth : true}))
    console.log("clicked")
  }
  logout(){
    localStorage.removeItem('auth')
    this.router.navigate(['/login'])
  }
}