import { Review } from "./review";

export interface LocationState{
    id: string;
    stateLocation: string;
    reviews: {
        reviews: Review[]
    };
}
