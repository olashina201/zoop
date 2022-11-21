import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ImageInput({ imageUri }: any) {
  return (
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
  },
});
