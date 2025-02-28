import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';

import {LineChart, PieChart} from 'react-native-gifted-charts';
import Loader from '../../../../ui/Loader';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import TimeCard from '../../../../ui/TimePicker';
import down from '../../../../assets/_PlantDetail/down.png';
import TimeBar from '../Components/TimeBar';
import DevicesHeader from '../../../../ui/DevicesHeader';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import EcomContext from '../../../../contextApi/DataProvider';
import {useDispatch, useSelector} from 'react-redux';

import ShowToast from '../../../../ui/Toast';
import * as Services from '../../../../networking/auth/Services';
import styles from '../styles';

export const DeviceDetailWeather = ({navigation, route}: any) => {
  const {plant, setplant, Data}: any = useContext(EcomContext);

  const {val} = route.params;
  //console.log(val,"-- WS Route");
  const [DateSelected, setDateSelected] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [linedataGreen, setLineDataGreen] = useState([]);
  const [linedataYellow, setLineDataYellow] = useState([]);
  const [linedataRed, setLineDataRed] = useState([]);
  const [linedataBlue, setLineDataBlue] = useState([]);
  const dispatch = useDispatch();

  const getLIneChartDataIV = async date => {
    console.log('called fun 2');
  };
  const getLIneChartDataTop = async date => {
    setisLoading(true);
    let obj = {
      plant: plant,
      token: Data,
      deviceID: val.device_id,
      date: date,
      DeviceKey: val.DeviceKey,
    };
    try {
      dispatch(Services.getChartWS(obj)).then(data => {
        console.log(JSON.stringify(data.payload.data), 'fgetChartWS');

        let itemGreen = data?.payload?.data.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m}, //'',
          };
          return properties;
        });

        //   console.log(itemGreen, 'itemGreen');

        setLineDataGreen(itemGreen);
        // setLineDataYellow(itemYellow);
        // setLineDataRed(itemRed);
        // setLineDataBlue(itemBlue);

        setisLoading(false);
      });
    } catch (err) {
      ShowToast('error', 'No records.');
      setisLoading(false);
    } finally {
      //  setisLoading(false);
    }
  };
  const getCurrentDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today', today);
    getLIneChartDataTop(today);
    getLIneChartDataIV(today);
    // fun(today);
    setDateSelected(today);

    // funGetHistoryToday(today);
  };
  useEffect(() => {
    getCurrentDate();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const lineData = [
    {
      value: 0,
      label: '00:00',
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
    },
    {
      value: 10,
      label: '04:00',
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
    },
    {
      value: 8,
      label: '08:00',
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
    },
    {
      value: 58,
      label: '12:00',
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
    },
    {
      value: 56,
      label: '16:00',
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
    },
    {
      value: 78,
      label: '20:00',
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
    },
  ];
  return (
    <View style={{flex: 1}}>
      <DevicesHeader
        title={'Device Detail Weather'}
        leftCallBack={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.pDiv}>
          <View style={styles.f4}>
            <Text style={styles.splanText2}>{val.DeviceName} </Text>
          </View>
          <View style={styles.rowStart}>
            <View style={styles.f2}>
              <Text style={styles.leftTxt}>{val.DeviceName} </Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>
                {val.Value} {val.Unit}
              </Text>
            </View>
          </View>
        </View>

        <TimeBar
          lineData={lineData}
          fun1={getLIneChartDataTop}
          fun2={getLIneChartDataIV}
          fun3={getLIneChartDataIV}
          fun4={getLIneChartDataIV}
          DateSelected={DateSelected}
          setDateSelected={setDateSelected}
        />
        {/* Time Card */}
        {/* <TimeCard
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={styles.timeDiv}>
          <Pressable
            onPress={() => showDatePicker()}
            style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'flex-end', flex: 2}}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  fontWeight: 'bold',
                }}>
                {DateSelected}
              </Text>
            </View>
            <View
              style={{
                flex: 1.5,
                justifyContent: 'center',
                paddingLeft: rfSpacing.xs,
              }}>
              <Image
                source={down}
                style={{height: rfSpacing.xl, width: rfSpacing.xl}}
              />
            </View>
          </Pressable>
        </View> */}

        {/* Line Chart */}
        <View style={styles.pDiv}>
          {/* <ReactNativeZoomableView
            maxZoom={4.5}
            minZoom={0.5}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}> */}
          <View
            style={{
              // alignSelf: 'center',
              // alignItems: 'center',
              // justifyContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              padding: rfSpacing.xxl,
            }}>
            <LineChart
              areaChart
              isAnimated={true}
              curved
              thickness={1}
              //  data={GridStatus === true ? lineData : lineDataNull}
              data={linedataGreen}
              height={150}
              //    showVerticalLines
              //    showHorizontaLines="true"
              //  spacing={Dimensions.get('window').width-10}
              yAxisTextStyle={{color: colors.fetGray, fontSize: rfSpacing.m}}
              initialSpacing={15}
              yAxisColor="#aaa"
              xAxisColor="#aaa"
              color1="#00b33c"
              color2="#ffcc00"
              color3="#9fbbf4"
              textColor1="green"
              hideDataPoints
              //     dataPointsColor1="blue"
              //    dataPointsColor2="red"
              startFillColor1="#00b33c"
              startFillColor2="#ffcc00"
              startFillColor3="#9fbbf4"
              //     hideRules
              startOpacity={0.4}
              endOpacity={0.1}
              pointerConfig={{
                pointerVanishDelay: 3000,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: true,
                pointerStripUptoDataPoint: true,
                pointerStripColor: 'black',
                pointerStripWidth: 2,
                strokeDashArray: [2, 5],
                pointerColor: 'red',
                radius: 2,
                //   pointerLabelWidth: 10,
                //  pointerLabelHeight: 10,
                pointerLabelComponent: items => {
                  return (
                    <View
                      style={{
                        height: 90,
                        width: 100,
                        justifyContent: 'center',
                        marginTop: -30,
                        marginLeft: -40,
                      }}>
                      <Text
                        style={{
                          color: colors.fetGray,
                          fontSize: 14,
                          marginBottom: 6,
                          textAlign: 'center',
                        }}>
                        {items[0].label}
                      </Text>

                      <View
                        style={{
                          paddingHorizontal: 14,
                          paddingVertical: 6,
                          borderRadius: 16,
                          backgroundColor: colors.white,
                        }}>
                        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                          Grid: {items[0].value}
                        </Text>
                      </View>
                    </View>
                  );
                },
              }}
            />
          </View>
          {/* </ReactNativeZoomableView> */}
        </View>
      </ScrollView>
    </View>
  );
};
