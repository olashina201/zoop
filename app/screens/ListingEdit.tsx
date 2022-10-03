import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Furniture", value: 3 },
];

const ListingEdit = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      />
      <AppFormField maxLength={255} name="title" placeholder="Title" />
      <AppFormField
        keyboardType="numeric"
        maxLength={8}
        name="price"
        placeholder="Price"
      />
      <AppFormPicker items={categories} name="category" placeholder="category" />
      <AppFormField
        maxLength={255}
        multiline
        name="description"
        numberOfLines={3}
        placeholder="Description"
      />
      <SubmitButton title="Post" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ListingEdit;
