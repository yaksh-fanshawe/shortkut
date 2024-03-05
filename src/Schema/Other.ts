
export interface PersonalDetails {
    email?: String | null
    firstName?: String | null
    lastName?: String | null
    dob?: String | null
    gender?: String | null
    phone?: String | null
    photoUrl?: String | null
}

export interface Location {
    address1?: String | null
    address2?: String | null
    city?: String | null
    state?: String | null
    country?: String | null
    pinCode?: String | null
    geoLocation?: GeoLocation | null
}

export interface GeoLocation {
    lat?: Number | null
    lng?: Number | null
}

export interface Slot {
    startDate: string
    endDate: string
    startTime: `${number}:${number}` // hh:mm
    endTime: `${number}:${number}`  // hh:mm
    isHoliday: boolean
}

export interface Availability {
    setSchedule: {
        monday: Slot,
        tuesday: Slot,
        wednesday: Slot,
        thursday: Slot,
        friday: Slot,
        saturday: Slot,
        sunday: Slot,
    }
    specialSchedule: Slot[]
}
