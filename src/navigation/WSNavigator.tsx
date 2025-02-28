import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WeatherStationDevicesCard from '../screens/App/DevicesHome/WeatherStationDevices';
import { DeviceDetailWeather } from '../screens/App/DevicesHome/DeviceDetailWeather/index';
const WSStack = createStackNavigator();

export const WSNavigator = () => {
  return (
    <WSStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <WSStack.Screen
        name="WeatherStationDevicesCard"
        component={WeatherStationDevicesCard}
      />
      <WSStack.Screen name="DeviceDetailWeather" component={DeviceDetailWeather} />
    </WSStack.Navigator>
  );
};
