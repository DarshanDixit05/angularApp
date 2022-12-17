import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  password=""
  errMsg = ""
  constructor(private auth:ServiceService, private router:Router){}
  login()
  {
    if(this.username.trim().length === 0)
    {
      this.errMsg = "Username is Required!"
      alert(this.errMsg);
    }else{
      this.errMsg=""
      let res = this.auth.login(this.username, this.password)

      if(res === 200)
      {
        this.router.navigate(['home'])
      }else{
        this.errMsg="Invalid Credentials"
        alert(this.errMsg);
      }
    }
  }
}
