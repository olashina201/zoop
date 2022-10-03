import { useFormikContext } from "formik";
import React from "react";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  items,
  name,
  PickerItemComponent,
  numberOfColumns,
  placeholder,
  width,
}: any) => {
  const { errors, setFieldValue, touched, values }: any = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item: any) => setFieldValue(name, item.label)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
