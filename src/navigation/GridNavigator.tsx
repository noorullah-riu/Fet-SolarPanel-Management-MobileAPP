import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import GridDevicesCard from '../screens/App/DevicesHome/GridDevices';
import { DeviceDetailGrid } from '../screens/App/DevicesHome/DeviceDetailGrid/index';
const GridStack = createStackNavigator();

export const GridNavigator = () => {
  return (
    <GridStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GridStack.Screen
        name="GridDevicesCard"
        component={GridDevicesCard}
      />
      <GridStack.Screen name="DeviceDetailGrid" component={DeviceDetailGrid} />
    </GridStack.Navigator>
  );
};
