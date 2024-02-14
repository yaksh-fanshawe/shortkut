import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AppHeader, AppTextInput } from "../../components";
import { Color, Screen } from "../../utils";
import { getLocationResults } from "../../utils/Data";

const list = [
  { city: "London", province: "Ontario" },
  { city: "Kitchener", province: "Ontario" },
  { city: "Waterloo", province: "Ontario" },
  { city: "Windsor", province: "Ontario" },
  { city: "Toronto", province: "Ontario" },
];

interface SearchScreenProps {
  selectedService: string;
}

const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  const {selectedService} = props.route.params
  const {navigation} = props
  const [location, setLocation] = useState("");
  const [shopList, setShopList] = useState([])

  const onChangeLocationText = (text) => {
    setLocation(text)
    const tempList = getLocationResults(text)
    setShopList(tempList)
    // console.log(getLocationResults(text))
  }

  const onPressShop = (item) => {
    // navigate to selected service
    navigation.navigate(Screen.BusinessProfileScreen, {shop: item})
  }

  return (
    <View style={styles.mainContainer}>
      <AppHeader />
      <View style={styles.topView}>
        <AppTextInput value={selectedService} editable={false} />
        <AppTextInput
          value={location}
          editable
          onChangeText={onChangeLocationText}
          placeholder={"Enter Location"}
        />
      </View>
      <View style={styles.midView}>
        <Text >Select Location</Text>
        <FlatList
          data={shopList}
          style={{ width: "100%" }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.listItem} onPress={() => onPressShop(item)}>
                <Text style={styles.listItemText}>{item.businessName}</Text>
                <Text >{`${item?.city}, ${item?.province}`}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  topView: {
    width: "100%",
    // height: "17%",
    alignItems: "center",
    padding: "2%",
    borderBottomWidth: 2,
    backgroundColor: Color.background,
  },
  midView: {
    alignItems: "center",
    padding: "2%",
    width: "100%",
    height: "75%",
    // backgroundColor: "red",
  },
  listItem: {
    // alignItems:'center',
    justifyContent: "center",
    padding: "2%",
    marginVertical: 5,
    backgroundColor: Color.blueShadow,
    borderRadius: 8
  },
  listItemText:{
    fontSize: 16,
    fontWeight: '500',
    color: Color.regularText
  }
});

export default SearchScreen;
