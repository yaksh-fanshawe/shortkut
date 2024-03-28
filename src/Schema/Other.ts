
export interface PersonalDetails {
    email: string | null
    firstName: string | null
    lastName: string | null
    dob: string | null
    gender: string | null
    phone: string | null
    photoUrl: string | null
}

export interface Location {
    address1: string | null
    address2: string | null
    city: string | null
    state: string | null
    country: string | null
    pinCode: string | null
    geoLocation: GeoLocation | null
}

export interface GeoLocation {
    lat: number | null
    lng: number | null
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
