import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Listings from "../screens/Listing";
import ListingDetails from "../screens/ListingDetails";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={Listings} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetails}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
