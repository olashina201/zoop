import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import ViewImage from "./app/screens/ViewImage";
import Welcome from "./app/screens/Welcome";

export default function App() {
  return (
    <Messages />
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
