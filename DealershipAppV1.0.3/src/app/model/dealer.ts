import { LocationState } from "./location-state";

export interface Dealer {
    id: string;
    name: string;
    locationState: {
        locations: LocationState[]
    };    
}
