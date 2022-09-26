import { Review } from "./review";

export interface Location {
    id: string;
    state: string;
    reviews: {
        reviews: Review[]
    };
}
