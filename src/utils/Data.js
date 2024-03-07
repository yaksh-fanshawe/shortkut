import _ from "lodash";

export const getLocationResults = (text) => {
  return _.filter(shops, (item) => {
    return _.includes(item.city, text);
  });
};

export const shops = [
  {
    businessName: "Level Up",
    address: "275 Wharncliffe Rd N",
    city: "London",
    province: "Ontario",
    pincode: "N6H 2C1",
    services: [
      {
        title: "Haircut",
        duration: 15,
        price: 20,
      },
      {
        title: "Hair Color",
        duration: 30,
        price: 35,
      },
      {
        title: "Beards",
        duration: 10,
        price: 15,
      },
      {
        title: "Long Hair",
        duration: 25,
        price: 25,
      },
    ],
  },
  {
    businessName: "Oxford BarberShop",
    address: "243 Wharncliffe Rd N",
    city: "London",
    province: "Ontario",
    pincode: "N6H 2B9",
    services: [
      {
        title: "Haircut",
        duration: 15,
        price: 20,
      },
      {
        title: "Hair Color",
        duration: 30,
        price: 35,
      },
      {
        title: "Beards",
        duration: 10,
        price: 15,
      },
      {
        title: "Long Hair",
        duration: 25,
        price: 25,
      },
    ],
  },
  {
    businessName: "Top T Cuts",
    address: "69 Wharncliffe Rd N",
    city: "London",
    province: "Ontario",
    pincode: "N6H 2A5",
    services: [
      {
        title: "Haircut",
        duration: 15,
        price: 20,
      },
      {
        title: "Hair Color",
        duration: 30,
        price: 35,
      },
      {
        title: "Beards",
        duration: 10,
        price: 15,
      },
    ],
  },
  {
    businessName: "London Fades Barbershop",
    address: "531 Colborne St",
    city: "London",
    province: "Ontario",
    pincode: "N6B 2T7",
    services: [
      {
        title: "Haircut",
        duration: 15,
        price: 20,
      },
      {
        title: "Hair Color",
        duration: 30,
        price: 35,
      },
      {
        title: "Beards",
        duration: 10,
        price: 15,
      },
    ],
  },
  {
    businessName: "Eivans Barbershop",
    address: "80 Wharncliffe Rd S",
    city: "London",
    province: "Ontario",
    pincode: "N6J 2K1",
    services: [
      {
        title: "Haircut",
        duration: 15,
        price: 20,
      },
      {
        title: "Hair Color",
        duration: 30,
        price: 35,
      },
      {
        title: "Beards",
        duration: 10,
        price: 15,
      },
    ],
  },
];

const Data = {
  getLocationResults,
  shops,
};

export default Data;
