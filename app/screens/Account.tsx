import React, { useContext } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import authStorage from "../auth/storage";
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import Icon from "../components/Icon";
import AuthContext from "../auth/context";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function Account({ navigation }: any) {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  }
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Sikiru olashina Quadri"
          subTitle="olashina201@gmail.com"
          image={require("../../assets/my.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default Account;
