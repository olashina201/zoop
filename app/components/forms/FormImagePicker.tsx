import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }: any) {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri: any) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: any) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: any) => imageUri !== uri)
    );
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
}

export default FormImagePicker;
