import { AsyncStorage } from 'react-native';

export const storeData = async (key, data) => {
  const stringifiedData = JSON.stringify(data);
  try {
    const data = await AsyncStorage.setItem(key, stringifiedData);
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export const retrieveData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data !== null ? {
      success: true,
      data: JSON.parse(data),
    } : {
      success: false,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
    };
  }
};
