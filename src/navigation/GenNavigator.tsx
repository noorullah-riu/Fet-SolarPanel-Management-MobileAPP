import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GenDevicesCard from '../screens/App/DevicesHome/GenDevices';
import { DeviceDetailGen } from '../screens/App/DevicesHome/DeviceDetailGen/index';
const GenStack = createStackNavigator();

export const GenNavigator = () => {
  return (
    <GenStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GenStack.Screen
        name="GenDevicesCard"
        component={GenDevicesCard}
      />
      <GenStack.Screen name="DeviceDetailGen" component={DeviceDetailGen} />
    </GenStack.Navigator>
  );
};
