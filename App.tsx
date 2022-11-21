import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import Login from "./app/screens/Login";
import ListingEdit from "./app/screens/ListingEdit";
import Listings from "./app/screens/Listing";
import Account from "./app/screens/Account";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import Register from "./app/screens/Register";
import ImageInput from "./app/components/ImageInput";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Furniture", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState<any>(categories[0]);
  const [imageUri, setImageUri] = useState<any>();

  return (
    <Screen>
      <ImageInput imageUri={imageUri} onChangeImage={(uri: any) => setImageUri(uri)} />
    </Screen>
  );
}
