import { Dealer } from "./dealer";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    date: {dealerReviews?: Dealer[], dealerReview?: Dealer};
}
