import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-animatable';
import error from '../assets/_Error/err.jpg';
import colors from '../theme/colors';

const Error404 = () => {
  return (
    <View
      style={{
        opacity: 0.9,
        //   position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="center"
        style={{height: '80%', width: '80%'}}
        source={error}
      />
    </View>
  );
};

export default Error404;
