import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subTitle, image }: any) => {
  return (
    <View style={styles.card}>
      <Image source={require(image)} />
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});

export default Card;
