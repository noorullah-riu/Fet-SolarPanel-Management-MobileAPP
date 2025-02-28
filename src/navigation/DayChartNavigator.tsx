import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HeaderCommon from '../ui/HeaderCommon';

import styles from './styles';
import { DayChartCard } from '../screens/App/ReportHome/DayChart/DayChartCard';
import { FullLineChart } from '../screens/App/ReportHome/FullChart';
import { createStackNavigator } from '@react-navigation/stack';
const DayChartStack = createStackNavigator();

export const DayChartNavigator = () => {
    return (
        <DayChartStack.Navigator
            screenOptions={({ route }) => ({
                headerShown:false,
              //  swipeEnabled: false,
            //    headerShown: true,
            //    tabBarIndicatorStyle: styles.devicesTabIndicator,
             //   tabBarLabelStyle: styles.reportTabLable,
              //  tabBarStyle: styles.devicesTabBar,
            })}>
            <DayChartStack.Screen name="Day" component={DayChartCard} />
            <DayChartStack.Screen name="FullLineChart" component={FullLineChart} />
        </DayChartStack.Navigator>

    );
};
