import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DevicesNavigator} from './DevicesNavigator';
import {ReportsNavigator} from './ReportsNavigator';
import {PlantDetail} from '../screens/App/PlantsHome/PlantsDetail/index';

import {BottomTabNestedImages} from '../ui/Images';
import styles from './styles';
const BottomStack = createBottomTabNavigator();

export const HomeBottomNav = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007970',
      }}>
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={BottomTabNestedImages.overview}
              style={styles.nestedIcon}
            />
          ),
        }}
        name="OverView"
        component={PlantDetail}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={BottomTabNestedImages.stats}
              style={styles.nestedIcon}
            />
          ),
        }}
        name="Statics"
        component={ReportsNavigator}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={BottomTabNestedImages.devices}
              style={styles.nestedIcon}
            />
          ),
        }}
        name="Devices"
        component={DevicesNavigator}
      />
    </BottomStack.Navigator>
  );
};
