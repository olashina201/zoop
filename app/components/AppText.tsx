import React from "react";
import { Text } from "react-native";

import defaultStyles from "../config/styles";

const AppText = ({ children, style }: any) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
