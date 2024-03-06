import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen from "../utils/Screens";
import LandingPage from "../screens/Home/landingPage";
import SearchScreen from "../screens/Search Screen/SearchScreen";
import BusinessProfileScreen from "../screens/BusinessProfileScreen/BusinessProfileScreen";
import CalenderScreen from "../screens/CalenderScreen/CalenderScreen";
import PaymentSelectionScreen from "../screens/PaymentSelectionScreen/PaymentSelectionScreen";
import AcknowledgementScreen from "../screens/Acknowledgement/AcknowledgementScreen";

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screen.LandingScreen} component={LandingPage} />
        <Stack.Screen name={Screen.SearchScreen} component={SearchScreen} />
        <Stack.Screen
          name={Screen.BusinessProfileScreen}
          component={BusinessProfileScreen}
        />
        <Stack.Screen name={Screen.CalenderScreen} component={CalenderScreen} />
        <Stack.Screen name={Screen.PaymentSelectionScreen} component={PaymentSelectionScreen} />
        <Stack.Screen name={Screen.AcknowledgementScreen} component={AcknowledgementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
