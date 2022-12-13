import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingEdit from "../screens/ListingEdit";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator } />
    <Tab.Screen name="ListingEdit" component={ListingEdit} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default AppNavigator;