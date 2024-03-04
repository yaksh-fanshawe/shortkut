// Library Imports
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
// Component Imports
import { AppHeader, AppTextInput } from "../../components";
import { Color, Screen } from "../../utils";
import { getLocationResults, shops } from "../../utils/Data";

// Constants
const list = [
  { city: "London", province: "Ontario" },
  { city: "Kitchener", province: "Ontario" },
  { city: "Waterloo", province: "Ontario" },
  { city: "Windsor", province: "Ontario" },
  { city: "Toronto", province: "Ontario" },
];

// Interface
interface SearchScreenProps {
  selectedService: string;
  route: any;
  navigation: any;
}

// Component
const SearchScreen: React.FC<SearchScreenProps> = (props) => {
  // Props
  const { selectedService } = props.route.params;
  const { navigation } = props;
  // State
  const [location, setLocation] = useState("");
  const [shopList, setShopList] = useState(shops);

  // Functions
  const onChangeLocationText = (text: string) => {
    setLocation(text);
    const tempList = getLocationResults(text);
    setShopList(tempList);
  };

  const onPressShop = (item: any) => {
    // navigate to selected service
    navigation.navigate(Screen.BusinessProfileScreen, { shop: item });
  };

  // Render
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
        <Text>{"Select Location"}</Text>
        <FlatList
          data={shopList}
          style={styles.flatListStyle}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => onPressShop(item)}
              >
                <Text style={styles.listItemText}>{item.businessName}</Text>
                <Text>{`${item?.city}, ${item?.province}`}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

// Default Props
SearchScreen.defaultProps = {
  selectedService: "",
  route: null,
  navigation: null,
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  topView: {
    width: "100%",
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
  },
  listItem: {
    justifyContent: "center",
    padding: "2%",
    marginVertical: 5,
    backgroundColor: Color.blueShadow,
    borderRadius: 8,
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "500",
    color: Color.regularText,
  },
  flatListStyle: {
    width: "100%",
  },
});

export default SearchScreen;
 