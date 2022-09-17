import { Component, getPlatform, OnInit } from '@angular/core';
import { AppModel } from 'src/app/model/app-model';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
error: any;

  constructor(private reviewService: ReviewsService) { }

  appModel: AppModel | undefined;

  ngOnInit(): void {
    this.getAllReviews();
  }

  private getAllReviews() {
    this.reviewService.getAllReviews().subscribe({
      next: (res) => {console.log(res),
                      this.appModel = res},
      error: (err) => {console.log(err), this.error = err}
    });
  }
}