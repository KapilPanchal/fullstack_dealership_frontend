import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppModel } from '../model/app-model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  private apiUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllReviews(): Observable<AppModel[]> {
    return this.http.get<AppModel[]>(`${this.apiUrl}/api/get-all`);
  }
}