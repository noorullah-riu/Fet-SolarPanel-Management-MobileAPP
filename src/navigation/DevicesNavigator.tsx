import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HeaderCommon from '../ui/HeaderCommon';

import {AllNavigator} from './AllNavigator';
import {InverterNavigator} from './InverterNavigator';
import {GenNavigator} from './GenNavigator';
import {GridNavigator} from './GridNavigator';
import {LoadNavigator} from './LoadNavigator';
import {WSNavigator} from './WSNavigator';

import styles from './styles';
const DevicesStack = createMaterialTopTabNavigator();

export const DevicesNavigator = () => {
  return (
    <>
      <HeaderCommon
        showLeftIcon={false}
      //  leftIcon={HeaderImages.back}
        //  leftCallBack={() => navigation.goBack()}
        title={'Devices'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />
      <DevicesStack.Navigator
        screenOptions={({route}) => ({
          //    headerShown: route.name === 'DeviceAll' ? true : false,
          swipeEnabled: false,
          headerShown: true,
          tabBarIndicatorStyle: styles.devicesTabIndicator,
          tabBarLabelStyle: styles.devicesTabLabel,
          tabBarStyle: styles.devicesTabBar,
        })}
      >
        <DevicesStack.Screen
          options={{tabBarLabel: 'All'}}
          name="DeviceAll"
          component={AllNavigator}
        />
        <DevicesStack.Screen
          options={{tabBarLabel: 'Inverter'}}
          name="InverterNavigator"
          component={InverterNavigator}
        />
        <DevicesStack.Screen
          options={{tabBarLabel: 'Gen'}}
          name="DeviceGen"
          component={GenNavigator}
        />
        <DevicesStack.Screen
          options={{tabBarLabel: 'Grid'}}
          name="DeviceGrid"
          component={GridNavigator}
        />
        <DevicesStack.Screen
          options={{tabBarLabel: 'Load'}}
          name="DevicelLoad"
          component={LoadNavigator}
        />

        <DevicesStack.Screen
          options={{tabBarLabel: 'W-S'}}
          name="DeviclWeather"
          component={WSNavigator}
        />
      </DevicesStack.Navigator>
    </>
  );
};
