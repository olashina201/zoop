import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import * as api from "../api/listing";

import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import Upload from "./Upload";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  // category: Yup.string().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Beauty", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Kids", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Electronics", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Computers", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "TV", value: 3, backgroundColor: "blue", icon: "lock" },
];

const ListingEdit = () => {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing: any, { resetForm }: any) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await api.addListings(
      { ...listing, location },
      (progress: any) => setProgress(progress)
    );
    
    if (!result.ok) {
      setUploadVisible(false);
      return alert("could not add listings");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <Upload onDone={() => setUploadVisible(false)} progress={progress} visible={uploadVisible} />
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
          images: [],
        }}
        onSubmit={handleSubmit}
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
