import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../theme/colors';

const ScroolAuth = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        barStyle={(barStyle = 'dark-content')}
        backgroundColor={(statusBarColor = colors.light_grey)}
      />
      <ScrollView
        style={{backgroundColor: colors.white}}
        /*   style={{flex: 1, paddingBottom: insets.bottom, paddingTop: insets.top,backgroundColor:"#fff"}} */
      >
        {children}
      </ScrollView>
    </>
  );
};

export default ScroolAuth;
