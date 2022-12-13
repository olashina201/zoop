import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Listings from "../screens/Listing";
import ListingEdit from "../screens/ListingEdit";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={Listings} />
    <Tab.Screen name="ListingEdit" component={ListingEdit} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default AppNavigator;