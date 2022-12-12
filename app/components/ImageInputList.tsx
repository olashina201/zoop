import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageInput from "./ImageInput";

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }: any) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri: any) => (
        <View key={uri} style={styles.image}>
          <ImageInput
            imageUri={uri}
            onChangeImage={() => onRemoveImage(uri)}
          />
        </View>
      ))}
      <ImageInput onChangeImage={(uri: string) => onAddImage(uri)} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  image: {
    marginRight: 10,
  }
});
