import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppModel } from 'src/app/model/app-model';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public error: any;

  constructor(private reviewService: ReviewsService) { }

  public appModelList!: AppModel[];

  ngOnInit(): void {
    this.getAllReviews();
  }

  private getAllReviews() {
    this.reviewService.getAllReviews().subscribe({
      next: (res: AppModel[]) => 
                      {console.log(res), this.appModelList = res,
                      this.appModelList = JSON.parse(JSON.stringify(res)),
                      console.log(this.appModelList)},
      error: (err: HttpErrorResponse) => 
                      {console.log(err), this.error = err.message}
    });
  }
}