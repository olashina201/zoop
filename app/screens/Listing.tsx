import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import * as api from "../api/listing";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function Listings({ navigation }: any) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(error)

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await api.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data as any);
  };
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listing</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator animating={loading} size="large" />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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
