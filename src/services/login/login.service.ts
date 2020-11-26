import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { CurrentUser } from '../model/current-user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string = environment.baseUrl;

  user:CurrentUser;

  constructor(private http:HttpClient) { }

  authenticateUser(email:string, password:string){

    const payload = {
      'email': email,
      'password': password,
      'mode': 'cookie'
    }

    return this.http.post(this.baseUrl + 'auth/authenticate', payload, {withCredentials: true}).pipe(
      map(
        res => {

          this.user = new CurrentUser();

          this.user.email = res['data']['user']['email'];
          this.user.first_name = res['data']['user']['first_name'];
          this.user.last_name = res['data']['user']['last_name'];

          return this.user;
        }
      )
    )
  }

}
