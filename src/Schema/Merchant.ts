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
}


