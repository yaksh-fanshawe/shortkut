// Library Imports
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MapView, { LatLng, Marker } from "react-native-maps";
// Component Imports
import { Color, Responsive } from "../../utils";
import { AppHeader, AppContainer, AppButton } from "../../components";

// Constants
const photoURL = "https://i.ibb.co/4TQ1DCn/m1.png";
// const businessName = 'London Barber Huts'
// const businessAddress = '1560 Dundas St, London, ON'
const defaultRegion = {
  latitude: 42.9927566,
  longitude: -81.2649877,
  latitudeDelta: 0.0075,
  longitudeDelta: 0.0075,
};
// const lastLocation = {
//   latitude: 43.0000004,
//   longitude: -81.1935947
// }

// Interface
interface BusinessProfileScreenProps {
  route: any;
  navigation: any;
}

const BusinessProfileScreen: React.FC<BusinessProfileScreenProps> = (props) => {
  // Props
  const { shop } = props.route.params;
  // State
  const [location, setLocation] = useState({
    latitude: 42.9927566,
    longitude: -81.2649877,
  });
  const {
    businessName,
    address: businessAddress,
    city,
    province,
    pincode,
    services,
  } = shop;

  // Functions
  const renderMap = (location: LatLng) => {
    return (
      <MapView
        rotateEnabled={true}
        style={styles.mapStyle}
        mapType={"standard"}
        initialRegion={{ ...defaultRegion, ...location }}
        scrollEnabled={true}
        showsScale
        showsCompass
        zoomEnabled={true}
        moveOnMarkerPress={true}
      >
        <Marker
          key={0}
          coordinate={location}
          title={businessName}
          description={businessAddress}
        />
      </MapView>
    );
  };

  const renderDay = (day: string, data: any, tabs = 2) => {
    const { isHoliday, startTime, endTime } = data[day];
    const dayText = day.charAt(0).toUpperCase() + day.slice(1);
    const tabSpace = "\t".repeat(tabs);
    return (
      <Text style={styles.addressText}>{`${dayText}:${tabSpace}${
        isHoliday ? "Closed" : `${startTime} - ${endTime}`
      }`}</Text>
    );
  };

  // Render
  return (
    <AppContainer style={styles.mainContainer}>
      <AppHeader />
      {/* <View style={styles.profileView}>
        <Image
          source={{ uri: photoURL }}
          style={styles.logoImg}
          resizeMode={"contain"}
        />
      </View> */}
      <View style={styles.titleView}>
        <Text style={styles.title}>{businessName}</Text>
        {/* <AppButton
          text={"Edit"}
          onPress={onPressEdit}
          style={styles.editTouch}
        /> */}
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.addressView}>
            <Text style={styles.addressTitleText}>{"Address"}</Text>
            <Text
              style={styles.addressText}
            >{`${businessAddress}, ${city}, ${province}`}</Text>
            {renderMap(location)}
          </View>
          {/* <View style={styles.addressView}>
            <Text style={styles.addressTitleText}>{"Business Hours"}</Text>

            {renderDay("sunday", schedule)}
            {renderDay("monday", schedule)}
            {renderDay("tuesday", schedule)}
            {renderDay("wednesday", schedule, 1)}
            {renderDay("thursday", schedule)}
            {renderDay("friday", schedule, 3)}
            {renderDay("saturday", schedule)}
          </View> */}
          {/* <AppButton text={"Log Out"} onPress={onPressLogOut} /> */}
        </ScrollView>
        <Text style={styles.priceText}>{`Select Services`}</Text>
        <View style={{ height: "60%", marginTop: 5 }}>
          <FlatList
            data={services}
            style={{ width: "100%" }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.listItem}>
                  <Text style={styles.listItemText}>{item?.title}</Text>
                  <Text
                    style={styles.priceText}
                  >{`Duration : ${item?.duration} minutes`}</Text>
                  <Text
                    style={styles.priceText}
                  >{`Price : $ ${item?.price}`}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </AppContainer>
  );
};

export default BusinessProfileScreen;

// Default Props
BusinessProfileScreen.defaultProps = {
  route: null,
  navigation: null,
};

// Styles
export const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.background,
    paddingHorizontal: Responsive.scale(10),
  },
  profileView: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.primaryText,
  },
  titleView: {
    marginVertical: Responsive.verticalScale(10),
  },
  editTouch: {
    position: "absolute",
    right: 0,
    top: 0,
    overflow: "hidden",
    paddingHorizontal: Responsive.scale(10),
    paddingVertical: Responsive.verticalScale(5),
    marginVertical: 0,
  },
  addressView: {
    marginTop: Responsive.verticalScale(10),
    borderColor: Color.themeBlue,
    borderWidth: 1,
    marginVertical: Responsive.verticalScale(10),
    padding: Responsive.scale(5),
    borderRadius: 10,
  },
  addressTitleText: {
    fontSize: Responsive.scale(18),
    fontWeight: "bold",
    color: Color.black,
    marginBottom: Responsive.verticalScale(10),
  },
  addressText: {
    fontSize: Responsive.scale(15),
    color: Color.black,
    marginBottom: Responsive.verticalScale(10),
  },
  currentDisplay: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Color.white,
    backgroundColor: Color.themeBlue,
  },
  mapStyle: {
    height: 200,
    width: "100%",
  },
  listItem: {
    justifyContent: "center",
    padding: "2%",
    marginVertical: 5,
    backgroundColor: Color.blueShadow,
    borderRadius: 8,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: "500",
    color: Color.primaryText,
  },
  priceText: {
    fontSize: 16,
    color: Color.regularText,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: Color.primaryText,
  },
});
