import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  const netInfo = useNetInfo();
  const demo = async () => {
    await AsyncStorage.setItem("person", JSON.stringify({ id: 1}));
    const value: any = await AsyncStorage.getItem("person");
    const person = JSON.parse(value);
  }
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
