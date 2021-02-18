import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router : Router, private auth : AuthService) { }

  ngOnInit(): void {
  }
  forgotPassword(){
   // this.forgotPass = true; this's  essentiel but wasn't requested
  }
  login(){
    this.auth.login();
    this.router.navigate([`/`]) 
  }
}
