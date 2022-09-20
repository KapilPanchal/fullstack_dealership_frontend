import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomResponse } from '../model/custom-response';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  

  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dealers$ = <Observable<CustomResponse>> this.http.get<CustomResponse>(`${this.apiUrl}/api/get-all`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error);
    return throwError(() => new Error(`An Error Occured - Error Code: ${error.status}`));
  }
}
