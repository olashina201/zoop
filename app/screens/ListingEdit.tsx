import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image")
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Furniture", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Furniture", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Furniture", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Furniture", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Furniture", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEdit = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if(!granted) return;
    const { coords: { latitude, longitude }}: any = await Location.getLastKnownPositionAsync();
    setLocation({ latitude, longitude });
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-red.png")}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={(values: any) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default ListingEdit;
