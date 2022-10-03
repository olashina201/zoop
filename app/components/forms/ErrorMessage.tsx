import React from "react";
import AppText from "../AppText";
import { StyleSheet } from "react-native";

const ErrorMessage = ({ error, visible }: any) => {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
