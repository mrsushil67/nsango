import React from "react";
import { Text, View } from "react-native";
import MainScreen from "./src/screens/MainScreen";
import GetStartedScreen from "./src/screens/GetStartedScreen";
import LoginScreen  from "./src/screens/LoginScreen";
import QuestionScreen  from "./src/screens/QuestionScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

 const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
 }

 export default App;