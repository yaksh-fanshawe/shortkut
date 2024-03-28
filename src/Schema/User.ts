import { GeoLocation, Location, PersonalDetails } from "./Other"

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

    static fromJson(data : Map<string, any>): User {
        let info : PersonalDetails = {
            email: data.get("email"),
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            dob: data.get("dob"),
            gender: data.get("gender"),
            phone: data.get("phone"),
            photoUrl: data.get("photoUrl")
        }

        let geo : GeoLocation = {
            lat: data.get("lat"),
            lng: data.get("lng")
        }

        let location : Location = {
            address1: data.get("address1"),
            address2: data.get("address2"),
            city: data.get("city"),
            state: data.get("state"),
            country: data.get("country"),
            pinCode: data.get("pinCode"),
            geoLocation: geo
        }

        return new User(info,location)
    }
}