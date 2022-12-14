import React from "react";
import { StyleSheet, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";
import Constants from "expo-constants";
import AppText from "./AppText";
import colors from "../config/colors";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if(netInfo.type !== "unknown" && netInfo.isInternetReachable === false) 
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No internet connection</AppText>
    </View>
  );

  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    zIndex: 1,
    width: "100%",
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
  }
});
