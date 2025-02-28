import React, {useState} from 'react';
import {ScrollView, Dimensions, Text, View} from 'react-native';
import HeaderCommon from '../../../ui/HeaderCommon';
import menu from '../../../assets/_Header/menu.png';
import back from '../../../assets/_Header/back-button.png';
import {DayChartCard} from './DayChart/DayChartCard';
import {MonthChartCard} from './MonthChart/MonthChartCard';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import style from './style';
const windowwidth = Dimensions.get('window').width;

export const ReportHome = ({navigation}: any) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Day'},
    {key: 'second', title: 'Month'},
    {key: 'third', title: 'Year'},
    {key: 'fourth', title: 'Lifetime'},
  ]);
  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <DayChartCard item={data5} />;
      case 'second':
        return <MonthChartCard item={data5} />;
      case 'third':
        return <MonthChartCard item={data5} />;
      case 'fourth':
        return <MonthChartCard item={data5} />;
      default:
        return null;
    }
  };

  const data5 = [
    {quarter: '00.00', earnings: 900},
    {quarter: '03.00', earnings: 1300},
    {quarter: '06.00', earnings: 1600},
    {quarter: '09.00', earnings: 2200},
    {quarter: '12.00', earnings: 1700},
    {quarter: '15.00', earnings: 1200},
    {quarter: '18.00', earnings: 1000},
    {quarter: '21.00', earnings: 800},
  ];

  return (
    <>
      <HeaderCommon
        showLeftIcon={true}
        leftIcon={back}
        leftCallBack={() => navigation.goBack()}
        title={'Reports'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />

      {/* <View style={style.wrapIndex}>
        <View style={style.smallDivWrap}>
          <View style={style.f1Center}>
            <View style={style.rowCenter}>
              <View style={style.f1}>
                <Text style={style.smallDivValue}>9.52</Text>
              </View>
              <View style={style.f2}>
                <Text style={style.smallDivUnit}>KWH</Text>
              </View>
            </View>
            <Text style={style.smallDivTitle}>Consumption Today</Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.1,
          }}></View>
        <View style={style.smallDivWrap}>
          <View style={style.f1Center}>
            <View style={style.rowCenter}>
              <View style={{flex: 1}}>
                <Text style={style.smallDivValue}>9.52</Text>
              </View>
              <View style={style.f2}>
                <Text style={style.smallDivUnit}>KWH</Text>
              </View>
            </View>
            <Text style={style.smallDivTitle}>Export Today</Text>
          </View>
        </View>
      </View> */}

      {/* <TabView
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
              <Text style={style.topBarTitle}>{route.title}</Text>
            )}
            indicatorStyle={style.indicatorS}
            style={style.topBarBG}
          />
        )}
      /> */}
    </>
  );
};
