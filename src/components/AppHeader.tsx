import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import { Color, Images, Responsive } from "../utils";

interface AppHeaderProps {
  isBackButton?: boolean;
  onPressBack?: TouchableOpacityProps["onPress"];
}

const AppHeader: React.FC<AppHeaderProps> = ({ isBackButton, onPressBack }) => {
  const renderBackButton = () => {
    return (
      <TouchableOpacity style={styles.backTouch} onPress={onPressBack}>
        <Image
          source={Images.back}
          style={styles.backImg}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {isBackButton && renderBackButton()}
      <Text style={styles.text}>{"ShortKut"}</Text>
      {isBackButton && <View style={styles.backTouch} />}
    </View>
  );
};

export default AppHeader;

// Default Props
AppHeader.defaultProps = {
  isBackButton: false,
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "7%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.white,
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.themeBlue,
    flex: 1,
    textAlign: "center",
  },
  backTouch: {
    // backgroundColor: Color.blueCard,
    padding: Responsive.moderateScale(10),
    height: "100%",
    aspectRatio: 1,
  },
  backImg: {
    width: "100%",
    height: "100%",
    tintColor: Color.themeBlue,
  },
});
