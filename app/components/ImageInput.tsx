import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function ImageInput({ imageUri }: any) {
  return (
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
      {imageUri && <Image source={{ uri: imageUri}} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: 100,
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
;
    height: 100%;
  }
});
