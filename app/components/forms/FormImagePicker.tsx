import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";

const FormImagePicker = ({ name }: any) => {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();

  const imageUris = values[name];

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: any) => {
    setFieldValue(name, imageUris.filter((imageUris: any) => imageUris !== uri));
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({});
