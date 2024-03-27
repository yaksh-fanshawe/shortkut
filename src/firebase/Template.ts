import firestore, {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';


// USERS

interface User {
    // Auth
    uid: string
    displayName?: string
    email: string
    // required
    firstName: string
    lastName: string
    dob: FirebaseFirestoreTypes.Timestamp
    gender: string // M or F or O
    // optional
    photoURL?: string | null
    residenceAddress?: string | null
    pincode?: string | null
    city?: string | null
    state?: string | null
    countryCode?: string | null
    phoneNumber?: string | null
}

export const getUserTemplate = (user: any): User => {
  const { uid,displayName='John Doe', email='user@gmail.com', firstName='John', lastName='Doe',dob='1970-01-01', gender='M', photoURL, residenceAddress, pincode, city, state, countryCode, phoneNumber } = user
  return {
    uid,
    displayName,
    email,
    firstName,
    lastName,
    dob: firestore.Timestamp.fromDate(new Date(dob)),
    gender,
    photoURL,
    residenceAddress,
    pincode,
    city,
    state,
    countryCode,
    phoneNumber
  }
}

// MERCHANTS

interface Slot {
  startDate: string
  endDate: string
  startTime: `${number}:${number}` // hh:mm
  endTime: `${number}:${number}`  // hh:mm
  isHoliday: boolean
}

interface Availability {
  setSchedule: {
    "monday": Slot,
    "tuesday": Slot,
    "wednesday": Slot,
    "thursday": Slot,
    "friday": Slot,
    "saturday": Slot,
    "sunday": Slot,
  }
  specialSchedule: Slot[]
}

interface Merchant {
  // required
    uid: string
    displayName: string
    firstName: string
    lastName: string
    email: string
    dob: string
    gender: string
    photoURL: string
    countryCode: string
    phoneNumber: string
    businessAddress: string
    businessPincode: string
    location: {latitude: number, longitude: number}
    services: string[] // array of service ids
    availability: Availability,
    isMerchant: boolean
}

const defaultLocation = {latitude: 43.0129606, longitude:-81.2818216} // {latitude:"43.0129606", longitude: "-81.2818216"}
const defaultAvailability = {
    setSchedule: {
      "monday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "09:00",
        endTime: "18:00",
        isHoliday: false
      },
      "tuesday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "09:00",
        endTime: "18:00",
        isHoliday: false
      },
      "wednesday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "09:00",
        endTime: "18:00",
        isHoliday: false
      },
      "thursday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "09:00",
        endTime: "18:00",
        isHoliday: false
      },
      "friday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "09:00",
        endTime: "18:00",
        isHoliday: false
      },
      "saturday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "10:00",
        endTime: "15:00",
        isHoliday: false
      },
      "sunday": {
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        startTime: "00:00",
        endTime: "00:00",
        isHoliday: true
      },
    },
    specialSchedule: [""]
  }

export const getMerchantTemplate = (merchant: any): Merchant => {
  const {uid, displayName= "MyBusinessName", email='merchant@gmail.com', firstName='John', lastName='Doe',dob='1970-01-01', gender="M", photoURL="", countryCode="+1", phoneNumber="9090909090", businessAddress= "1001 Fanshawe College Blvd", businessPincode="N5Y 5R6", location= defaultLocation,  services=[""], availability= defaultAvailability} = merchant
  return {
    uid,
    displayName,
    firstName,
    lastName,
    email,
    dob,
    gender,
    photoURL,
    countryCode,
    phoneNumber,
    businessAddress,
    businessPincode,
    location,
    services,
    availability,
    isMerchant: true
  }
}