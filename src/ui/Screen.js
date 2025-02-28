import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../theme/colors';

const Screen = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      {/*   <StatusBar
        barStyle={barStyle = 'light-content'}
        backgroundColor={statusBarColor='#3041A9'}
      /> */}
      <StatusBar translucent backgroundColor="transparent" />
      <View style={{backgroundColor: colors.white}}>{children}</View>
    </>
  );
};

export default Screen;
