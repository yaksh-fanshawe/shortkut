import firestore from '@react-native-firebase/firestore'
import Merchant from "./Merchant"

export class ServiceTypes {
    services : Map<string , ServiceType>
    collection : string

    constructor(){
        this.services = new Map()
        this.collection = "serviceTypes"
    }

    async fetchServices() {
        let snapshot = await firestore().collection("serviceTypes").get()
        snapshot.forEach((doc) => {
            let id = doc.id
            let data = doc.data()
            var serviceType : ServiceType = {typeID : id, city: null, province: null, services: []};
            this.services.set(data["type"], serviceType)
        })
    }

    async fetchServicesOfType(type : string, city: string , province: string) {
        let id = this.services.get(type)?.typeID
        if(id){
            let ref = firestore().collection(this.collection).doc(id).collection(`${city}, ${province}`)
            let snapshot = await ref.get()
            var services: Service[] = []
            snapshot.forEach(async service => {
                let data = service.data()
                let merchantId = data.get("merchant")
                let merchantData = await firestore().collection("user").doc(merchantId).get()
                let merchant = Merchant.fromJson(merchantData.data() as Map<string, any>)
                let ser : Service = {
                    title: data["title"],
                    description: data["description"],
                    duration: data["duration"],
                    gender: data["gender"],
                    price: data["price"],
                    merchant: merchant 
                }
                services.push(ser)
            });
            var serviceType : ServiceType = {typeID : id, city: city, province: province, services: services};
            this.services.set(type, serviceType);
        }
    }
}

export interface ServiceType {
    typeID : string | null
    city : String | null,
    province : String | null,
    services : Service[],
}

export interface Service {
    title : String | null,
    description : String | null,
    duration : number | null,
    gender : String | null,
    price : number | null,
    merchant : Merchant | null
}