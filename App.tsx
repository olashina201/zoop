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

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Furniture", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState<any>(categories[0]);

  return <ListingEdit />;
}
