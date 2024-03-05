import { Location, PersonalDetails } from "./Other"

export default class User{
    uid?: String | null
    isMerchant = false;

    constructor(
        readonly info: PersonalDetails,
        readonly location: Location,
    ) {
        this.info = info
        this.location = location
    }

    convertToMerchant() {
        this.isMerchant = true
    }
}