import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
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
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
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
