import { View, Text } from "react-native";
import React from "react";
import SearchScreen from "./src/screens/Search Screen/SearchScreen";
import BusinessProfileScreen from "./src/screens/BusinessProfileScreen/BusinessProfileScreen";
import { shops } from "./src/utils/Data";


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <SearchScreen selectedService={"Haircut"} /> */}
      <BusinessProfileScreen shop={shops[0]} />
    </View>
  );
};

export default App;
