import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Color } from "../utils";

const AppHeader = () => {
  return (
    <View style={style.container}>
        <Text style={style.brandText}>ShortKut</Text>
    </View>
  );
};

export default AppHeader;


const style = StyleSheet.create({
    container :  {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor : Color.themeBlue,
        justifyContent: "center",
        alignContent: "center",
    },
    brandText : {
        alignSelf: "center",
        fontSize : 20,
        paddingVertical: 15,
        color: Color.white,
        fontWeight: "800",
    }
})