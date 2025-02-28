import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HeaderCommon from '../ui/HeaderCommon';

import styles from './styles';
import {DayChartCard} from '../screens/App/ReportHome/DayChart/DayChartCard';
//import { DayChartNavigator } from './DayChartNavigator';
import {MonthChartCard} from '../screens/App/ReportHome/MonthChart/MonthChartCard';
import { YearChartCard } from '../screens/App/ReportHome/YearChart/YearChartCard';
import { LifeTimeChartCard } from '../screens/App/ReportHome/LifeTimeChart/LifeTimeChartCard';
import { FullLineChart } from '../screens/App/ReportHome/FullChart';
const ReportsStack = createMaterialTopTabNavigator();

export const ReportsNavigator = () => {
  return (
    <>
      <HeaderCommon
        showLeftIcon={false}
        //    leftIcon={back}
        // leftCallBack={() => navigation.goBack()}
        title={'Reports'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />

      <ReportsStack.Navigator
        screenOptions={({route}) => ({
          //    headerShown: route.name === 'DeviceAll' ? true : false,
          swipeEnabled: false,
          headerShown: true,
          tabBarIndicatorStyle: styles.devicesTabIndicator,
          tabBarLabelStyle: styles.reportTabLable,
          tabBarStyle: styles.devicesTabBar,
        })}>
        <ReportsStack.Screen name="Day" component={DayChartCard} />
        <ReportsStack.Screen name="Month" component={MonthChartCard} />
        <ReportsStack.Screen name="Year" component={YearChartCard} />
        <ReportsStack.Screen name="Lifetime" component={LifeTimeChartCard} />
        {/* <ReportsStack.Screen name="FullLineChart" component={FullLineChart} /> */}
      </ReportsStack.Navigator>
    </>
  );
};
