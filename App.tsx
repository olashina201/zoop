import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppPicker from "./app/components/AppPicker";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";


export default function App() {
  const [firstName, setFirstName] = useState<string>();

  return (
    <Screen>
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}