import { Availability, Location, PersonalDetails, Slot, GeoLocation } from "./Other"
import User from "./User"

export default class Merchant extends User {
    availability? : Availability | null
    services? : string[] | null

    constructor(
        readonly storeName: String,
        readonly info: PersonalDetails,
        readonly location: Location,
    ) {
        super(info, location)
        super.convertToMerchant()
        this.storeName = storeName
    }

    static fromJson(data : Map<string, any>): Merchant {
        let user = super.fromJson(data);
        // Need to add availability and services
        return new Merchant(data.get("storeName"), user.info, user.location)
    }
}


