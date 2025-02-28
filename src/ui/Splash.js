import React from 'react';
import {View,StatusBar} from 'react-native';
import {Image} from 'react-native-animatable';
//import logo from '../assets/_Splash/gp_logo.png';
import SplashLogo from '../assets/_Splash/fet.jpeg';
import spacing from '../theme/spacing';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

const Splash = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        //    zIndexv1,
      }}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        resizeMode="contain"
        style={{height: rfSpacing['4H'], width: rfSpacing['4H']}}
        source={SplashLogo}
      />
    </View>
  );
};

export default Splash;
