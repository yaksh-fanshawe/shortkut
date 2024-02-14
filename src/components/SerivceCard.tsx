import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Color } from "../utils";

const ServiceCard = () => {
  return (
    <View style={style.container}>
        <Text style={style.serviceText}>ShortKut</Text>
    </View>
  );
};

export default ServiceCard;


const style = StyleSheet.create({
    container :  {
        display: "flex",
        flexDirection: "row",
        backgroundColor : Color.themeBlue,
        justifyContent: "center",
        alignContent: "center",
    },
    image: {

    },
    serviceText : {
        alignSelf: "center",
        fontSize : 20,
        paddingVertical: 15,
        color: Color.white,
        fontWeight: "800",
    }
})