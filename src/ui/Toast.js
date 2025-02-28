import Toast from 'react-native-toast-message';
import React from 'react';


const ShowToast = (type, error) => {
  Toast.show({
    type: type,
    text1: error,
  });
}
 
export default ShowToast; 
