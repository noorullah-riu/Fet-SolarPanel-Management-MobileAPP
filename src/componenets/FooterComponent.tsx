import React from 'react';
import {View} from 'react-native';
import rfSpacing from '../theme/rfSpacing';

export const Footer_Component = () => {
  return (
    <View
      style={{
        height: rfSpacing['6xl'],
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
      }}></View>
  );
};
