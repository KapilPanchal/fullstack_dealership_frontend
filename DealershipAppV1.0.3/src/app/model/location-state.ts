import { Review } from "./review";

export interface LocationState {
    id: string;
    state: {reviews?: Review[], review?: Review};
}
