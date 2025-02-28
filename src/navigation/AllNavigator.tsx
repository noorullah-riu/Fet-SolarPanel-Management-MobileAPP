import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AllDevicesCard from '../screens/App/DevicesHome/AllDevices';
import {DeviceDetailGen} from '../screens/App/DevicesHome/DeviceDetailGen/index';
import {DeviceDetail} from '../screens/App/DevicesHome/DeviceDetail/index';
import {DeviceDetailGrid} from '../screens/App/DevicesHome/DeviceDetailGrid/index';
import {DeviceDetailLoad} from '../screens/App/DevicesHome/DeviceDetailLoad/index';

const AllStack = createStackNavigator();

export const AllNavigator = () => {
  return (
    <AllStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AllStack.Screen name="AllDevicesCard" component={AllDevicesCard} />
      <AllStack.Screen name="DeviceDetailGen" component={DeviceDetailGen} />
      <AllStack.Screen name="DeviceDetail" component={DeviceDetail} />
      <AllStack.Screen name="DeviceDetailGrid" component={DeviceDetailGrid} />
      <AllStack.Screen name="DeviceDetailLoad" component={DeviceDetailLoad} />
    </AllStack.Navigator>
  );
};
