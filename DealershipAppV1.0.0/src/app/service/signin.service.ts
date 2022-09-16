import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppUser } from '../model/app-user';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  // tokenUrl= environment.accessTokenUrl;

  // constructor(private http: HttpClient) { }

  // public getTokenFromServer(appUser: AppUser): Observable<any>{
  //   const tokenValue = this.http.post<any>(`${this.tokenUrl}`, appUser);
  //   return tokenValue;
  // }
}