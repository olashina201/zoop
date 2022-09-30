import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "../components/Screen";

// console.log(Constants);
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/my.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/my.jpeg"),
  },
];

const Messages = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
  },
});
export default Messages;
