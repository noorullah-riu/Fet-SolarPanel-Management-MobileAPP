import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ColorSpace} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../theme/colors';

const Loader = () => {
  return (
    <View
      style={{
        opacity: 0.9,
        position: 'absolute',
        width: '100%',
        height: '100%',
        //  backgroundColor:"transparent",
        backgroundColor: colors.white,
        justifyContent: 'center',
        //    zIndexv1,
      }}>
      <ActivityIndicator color={colors.Indigo} size={'large'} />
    </View>
  );
};

export default Loader;
