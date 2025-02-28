import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import InvertorDevicesCard from '../screens/App/DevicesHome/InvertorDevices';
import {DeviceDetail} from '../screens/App/DevicesHome/DeviceDetail/index';
const InverterStack = createStackNavigator();

export const InverterNavigator = () => {
  return (
    <InverterStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InverterStack.Screen
        name="InvertorDevicesCard"
        component={InvertorDevicesCard}
      />
      <InverterStack.Screen name="InverterDetail" component={DeviceDetail} />
    </InverterStack.Navigator>
  );
};
