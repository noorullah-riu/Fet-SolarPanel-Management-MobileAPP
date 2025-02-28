import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoadDevicesCard from '../screens/App/DevicesHome/LoadDevices';
import { DeviceDetailLoad } from '../screens/App/DevicesHome/DeviceDetailLoad/index';
const LoadStack = createStackNavigator();

export const LoadNavigator = () => {
  return (
    <LoadStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LoadStack.Screen
        name="LoadDevicesCard"
        component={LoadDevicesCard}
      />
      <LoadStack.Screen name="DeviceDetailLoad" component={DeviceDetailLoad} />
    </LoadStack.Navigator>
  );
};
