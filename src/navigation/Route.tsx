import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screen from '../utils/Screens'
import LandingPage from '../screens/Home/landingPage'

const Stack = createNativeStackNavigator()

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Screen.LandingScreen} component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
