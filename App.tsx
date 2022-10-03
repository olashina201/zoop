import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import Account from "./app/screens/Account";
import Listings from "./app/screens/Listing";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import ViewImage from "./app/screens/ViewImage";
import Welcome from "./app/screens/Welcome";

export default function App() {
  const [firstName, setFirstName] = useState<string>();

  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
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
