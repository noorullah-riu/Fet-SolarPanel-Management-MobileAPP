import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FotgotPassword} from '../screens/Auth/ForgotPassword';
import {Login} from '../screens/Auth/Login';
import { SignUp } from '../screens/Auth/SignUp';

export type AuthStackParamList = {
  Login: undefined,
  SignUp: undefined,
};

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="FotgotPassword" component={FotgotPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
