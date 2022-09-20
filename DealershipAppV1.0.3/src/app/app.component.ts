import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from './enum/data-state';
import { AppState } from './model/app-state';
import { CustomResponse } from './model/custom-response';
import { ReviewsService } from './service/reviews.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DealershipAppV1.0.3';

  appState$!: Observable<AppState<CustomResponse>>;

  constructor(private reviewsService: ReviewsService){}
  
  ngOnInit(): void {
    this.appState$ = this.reviewsService.dealers$
    .pipe(
      map((response) => {
        return {
          dataState: DataState.LOADED_STATE,
          appData: response
        }
      }),
      startWith({
        dataState: DataState.LOADING_STATE
      }),
      catchError((error: string) => {
        return of({
          dataState: DataState.ERROR_STATE,
          error: error
        });
      })
    );
  }
}
