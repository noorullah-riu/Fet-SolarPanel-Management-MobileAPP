import React, {useEffect, useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useTheme,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {useColorScheme, View} from 'react-native';
import EcomContext from '../contextApi/DataProvider';
import {AuthNavigator} from './AuthNavigator';
import {BottomTabNavigator} from './BottomTabNavigator';
import {CardStyleInterpolators} from '@react-navigation/stack';

import Splash from '../ui/Splash';

import {useDispatch, useSelector} from 'react-redux';
const DarkThemes = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    // background: '#000000',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Stack = createStackNavigator();
export const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {UserAuthentic, Data, UserType} = useContext(EcomContext);

  const dispatch = useDispatch();
  const {product, loading, Error, term, arr} = useSelector(
    (state: RootState) => state.products,
  );

  useEffect(() => {
    setTimeout(() => {
      //   Alert.alert("root app ,",term);
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        cardOverlayEnabled: false,
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}>
      {!UserAuthentic ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : (
        <Stack.Screen name="App" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkThemes : DefaultTheme}>
      <Root />
    </NavigationContainer>
  );
};
