import * as SecureStore from "expo-secure-store";

const key = "key";
const storeToken = async (token: any) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export default { getToken, removeToken, storeToken}
