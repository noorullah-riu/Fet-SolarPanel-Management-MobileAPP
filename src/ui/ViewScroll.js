import {StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import colors from '../theme/colors';

const ViewScrool = ({children}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      {/*    <StatusBar
          barStyle={barStyle = 'light-content'}
          backgroundColor={statusBarColor='#428bca'}
        /> */}
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView style={{backgroundColor: colors.white}}>
        {children}
      </ScrollView>
    </>
  );
};

export default ViewScrool;
