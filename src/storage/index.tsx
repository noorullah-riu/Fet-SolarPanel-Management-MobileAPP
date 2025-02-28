import AsyncStorage from '@react-native-async-storage/async-storage';

const userKey = '@User';
const storeDataLogin = async (userDetails:any) => {
  try {
    const userProfile = JSON.stringify(userDetails);
    await AsyncStorage.setItem(userKey, userProfile);
  } catch (error) {
  }
};

const removeUser = async () => {
  try {
    const jsonValue = await AsyncStorage.removeItem(userKey);
    return true;
  } catch (error) {
    return false;
  }
};

const getDataContext = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(userKey);
    if (jsonValue !== null) {
      console.log('User in async string', jsonValue);
      const itemsobj = JSON.parse(jsonValue);
      console.log('User in async object', itemsobj);
      return itemsobj;
    }
  } catch (error) {
    return error;
  }
};

export {storeDataLogin, removeUser, getDataContext};
