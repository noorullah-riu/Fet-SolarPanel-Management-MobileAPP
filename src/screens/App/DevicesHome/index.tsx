import React, {useState} from 'react';
import {ScrollView, Dimensions, Text, View} from 'react-native';
import style from './styles';
import HeaderCommon from '../../../ui/HeaderCommon';
import back from '../../../assets/_Header/back-button.png';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import LoadDevicesCard from './LoadDevices';
import InvertorDevicesCard from './InvertorDevices';
import GridDevicesCard from './GridDevices';
import GenDevicesCard from './GenDevices';
import WeatherStationDevicesCard from './WeatherStationDevices';
import AllDevicesCard from './AllDevices';
const windowwidth = Dimensions.get('window').width;

export const DevicesHome = ({navigation}: any) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'All', title: 'All'},
    {key: 'first', title: 'Invertor'},
    {key: 'second', title: 'Gen'},
    {key: 'third', title: 'Grid'},
    {key: 'fourth', title: 'Load'},
    {key: 'fifth', title: 'W-S'},
  ]);
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'fourth':
        return (
          <LoadDevicesCard
            plantDetailNavFUn={deviceDetailNavFunLoad}
            item={DATA}
          />
        );
      case 'first':
        return (
          <InvertorDevicesCard
            plantDetailNavFUn={deviceDetailNavFUn}
            item={DATA}
          />
        );
      case 'third':
        return (
          <GridDevicesCard
            plantDetailNavFUn={deviceDetailNavFunGrid}
            item={DATA}
          />
        );
      case 'second':
        return (
          <GenDevicesCard
            plantDetailNavFUn={deviceDetailNavFunGen}
            item={DATA}
          />
        );
      case 'fifth':
        return (
          <WeatherStationDevicesCard
            plantDetailNavFUn={deviceDetailNavFunWeather}
            item={DataWeather}
          />
        );
      case 'All':
        return (
          <AllDevicesCard
            plantDetailNavFUn={deviceDetailNavFUn}
            deviceDetailNavFunLoad={deviceDetailNavFunLoad}
            deviceDetailNavFunGen={deviceDetailNavFunGen}
            deviceDetailNavFunGrid={deviceDetailNavFunGrid}
            deviceDetailNavFunWeather={deviceDetailNavFunWeather}
            item={DATA}
          />
        );
      default:
        return null;
    }
  };

  const deviceDetailNavFUn = () => {
    navigation.navigate('DeviceDetail');
    // Alert.alert('Add Pressed');
  };

  const deviceDetailNavFunLoad = () => {
    navigation.navigate('DeviceDetailLoad');
    // Alert.alert('Add Pressed');
  };
  const deviceDetailNavFunGen = () => {
    navigation.navigate('DeviceDetailGen');
    // Alert.alert('Add Pressed');
  };
  const deviceDetailNavFunGrid = () => {
    navigation.navigate('DeviceDetailGrid');
    // Alert.alert('Add Pressed');
  };

  const deviceDetailNavFunWeather = () => {
    navigation.navigate('DeviceDetailWeather');
    // Alert.alert('Add Pressed');
  };

  const DATA = [
    {
      id: 1,
      companyName: 'GREEN FOOD ',
      OrderId: 'R000011',
      Quantity: '3000',
      Total: '221130',
    },
    {
      id: 2,
      companyName: 'TRIPPLE-EM ',
      OrderId: 'R000012',
      Quantity: '3100',
      Total: '223190',
    },
    {
      id: 3,
      companyName: 'GUJRANWALA FOOD ',
      OrderId: 'R000013',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 4,
      companyName: '4cPackages',
      OrderId: 'R000014',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 5,
      companyName: 'HILMTON FOOD ',
      OrderId: 'R000015',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 6,
      companyName: '4cPackages',
      OrderId: 'R000014',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 7,
      companyName: 'HILMTON FOOD ',
      OrderId: 'R000015',
      Quantity: '3200',
      Total: '2241810',
    },
  ];
  const DataWeather = [
    {
      id: 1,
      DeviceName: 'Solar Iradius ',
      Value: 'Solar Irradius Value:',
    },
    {
      id: 2,
      DeviceName: 'Wind Speed ',
      Value: 'Wind Speed Value:',
    },
    {
      id: 3,
      DeviceName: 'Wind Direction ',
      Value: 'Wind Direction Value:',
    },
    {
      id: 4,
      DeviceName: 'PV Temprature ',
      Value: 'PV Temprature Value:',
    },
    {
      id: 5,
      DeviceName: 'Ambient Temprature ',
      Value: 'Ambient Temprature Value:',
    },
    {
      id: 6,
      DeviceName: 'Humidity ',
      Value: 'Humidity Value:',
    },
  ];

  return (
    <>
    <Text>Index</Text>
      {/* <HeaderCommon
        showLeftIcon={true}
        leftIcon={back}
        leftCallBack={() => navigation.goBack()}
        title={'Devices'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      /> */}
{/* 
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: windowwidth}}
        showPageIndicator={true}
        swipeEnabled={false}
        renderTabBar={props => (
          <TabBar
            {...props}
            renderLabel={({route}) => (
              <Text style={style.indicatorText}>{route.title}</Text>
            )}
            indicatorStyle={style.indicatorS}
            style={style.indS}
          />
        )}
      /> */}
    </>
  );
};
