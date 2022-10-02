import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import Account from "./app/screens/Account";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import ViewImage from "./app/screens/ViewImage";
import Welcome from "./app/screens/Welcome";

export default function App() {
  return (
    // <Screen>
    //   <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
    // </Screen>
    <Account />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
