import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ items, name, placeholder }: any) => {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();
  
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item: any) => setFieldValue(name, item.label)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
