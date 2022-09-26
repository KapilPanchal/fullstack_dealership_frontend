import { Location } from "./location";

export interface Dealer {
    id: string;
    name: string;
    location: {
        locations: Location[]
    };    
}
