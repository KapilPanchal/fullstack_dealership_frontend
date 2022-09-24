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

export class AppComponent implements OnInit {
 
  appState$!: Observable<AppState<CustomResponse>>;
  constructor(private reviewsService: ReviewsService){}
  
  ngOnInit(): void {
    this.appState$ = this.reviewsService.dealers$
    .pipe(
      map((response: CustomResponse) => {
        return {
          dataState: DataState.LOADED_STATE,
          appData: response          
        }
      }),
      startWith({
        dataState: DataState.LOADING_STATE
      }),
      catchError((err: CustomResponse) => {
        return of({
          dataState: DataState.ERROR_STATE,
          error: err.message
        });
      })
    );
  }
}
