import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PlantsNavigator} from './PlantsNavigator';
import {AboutUs} from '../screens/App/AboutUs/index';
import {SettingsNavigator} from './SettingsNavigator';

import styles from './styles';
import {BottomTabImages} from '../ui/Images';
import colors from '../theme/colors';
const BottomStack = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:colors.fetGreen ,
      }}>
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image source={BottomTabImages.homeTab}
             style={styles.nestedIcon} />
          ),
        }}
        name="Home"
        component={PlantsNavigator}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
            source={BottomTabImages.about}
              style={styles.nestedIcon}
            />
          ),
        }}
        name="About"
        component={AboutUs}
      />
      <BottomStack.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
            source={BottomTabImages.settings}
              style={styles.nestedIcon}
            />
          ),
        }}
        name="SettingsNav"
        component={SettingsNavigator}
      />
    </BottomStack.Navigator>
  );
};
