import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  login(uname: string, pswd: string)
  {
    if(uname === "admin" && pswd === "abc")
    {
      return 200;
    }else{
      return 404;
    }
  }
}
