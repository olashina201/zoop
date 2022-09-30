import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetails = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../../assets/my.jpeg")}
          title="Olashina"
          subTitle="5 Posts"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  }
});

export default ListingDetails;
