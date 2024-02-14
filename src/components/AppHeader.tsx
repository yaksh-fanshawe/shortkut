import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../utils";

const AppHeader = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{"ShortKut"}</Text>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  mainContainer: {
    height: "7%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: Color.primaryText,
  },
});
