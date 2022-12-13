import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import * as api from "../api/listing";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

function Listings({ navigation }: any) {
  const [listings, setListings] = useState([])

  useEffect(() => {
      loadListings();
  }, [])

  const loadListings = async () => {
    const response = await api.getListings();
    setListings((response.data as any))
    console.log(response.data)
  }
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item) }
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default Listings;
