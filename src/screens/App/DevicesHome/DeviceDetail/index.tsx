import React, { useState, useContext, useEffect, useRef } from 'react';
import {
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
import style from '../styles';
import StatusCode from '../Components/StatusCode';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import styles from '../styles';
import DevicesHeader from '../../../../ui/DevicesHeader';

import LineChart4Devices from '../Components/LineChart4Devices';
import LineChart2Btns from '../Components/LineChart2Btns';
import TimeBar from '../Components/TimeBar';

import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../../networking/auth/Services';
import EcomContext from '../../../../contextApi/DataProvider';
import Loader from '../../../../ui/Loader';
import ShowToast from '../../../../ui/Toast';
import Orientation from 'react-native-orientation-locker';
import { FullLineChartComp } from '../../ReportHome/FullChart/FullChartComp';
import { twoDecimal } from '../../../../utiltyFunc';

export const DeviceDetail = ({ navigation, route }: any) => {
  const { routeVal } = route.params;
  const { plant, setplant, Data }: any = useContext(EcomContext);
  //console.log(routeVal, '-----> Device Item Selected');

  const [isLoading, setisLoading] = useState(false);
  const [deviceData, setdeviceData] = useState({});

  const [linedataGreen, setLineDataGreen] = useState([{
    value: 0,
    label: '00:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },
  {
    value: 0,
    label: '04:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },]);
  const [linedataYellow, setLineDataYellow] = useState([{
    value: 0,
    label: '00:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },
  {
    value: 0,
    label: '04:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },]);
  const [linedataRed, setLineDataRed] = useState([{
    value: 0,
    label: '00:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },
  {
    value: 0,
    label: '04:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },]);
  const [linedataBlue, setLineDataBlue] = useState([{
    value: 0,
    label: '00:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },
  {
    value: 0,
    label: '04:00',
    labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
  },]);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalIn = () => {
    Orientation.lockToLandscapeLeft();
    setModalVisible(!isModalVisible);
  };
  const toggleModalOut = () => {
    Orientation.lockToPortrait();
    setModalVisible(!isModalVisible);
  };

  const [isModalVisibleDC, setModalVisibleDC] = useState(false);
  const toggleModalInDC = () => {
    Orientation.lockToLandscapeLeft();
    setModalVisibleDC(!isModalVisibleDC);
  };
  const toggleModalOutDC = () => {
    Orientation.lockToPortrait();
    setModalVisibleDC(!isModalVisibleDC);
  };


  const [LoadMax, setLoadMax] = useState(0);
  const [LoadMax2, setLoadMax2] = useState(0);
  const [htmlCode, sethtmlCode] = useState('');
  const [htmlCodeDC, sethtmlCodeDC] = useState('');

  const [DCI, setDCI] = useState([
    {
      value: 0,
      label: '00:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 0,
      label: '04:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
  ]);
  const [DCV, setDCV] = useState([
    {
      value: 0,
      label: '00:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 0,
      label: '04:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
  ]);

  const [DateSelected, setDateSelected] = useState('');

  const dispatch = useDispatch();

  const lineData = [
    {
      value: 0,
      label: '00:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 10,
      label: '04:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 8,
      label: '08:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 58,
      label: '12:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 56,
      label: '16:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
    {
      value: 78,
      label: '20:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
  ];
  const lineData2 = [
    { value: 0, label: '00:00' },
    { value: 20, label: '04:00' },
    { value: 18, label: '08:00' },
    { value: 40, label: '12:00' },
    { value: 36, label: '16:00' },
    { value: 60, label: '20:00' },
  ];
  const lineData3 = [
    { value: 0, label: '00:00' },
    { value: 30, label: '04:00' },
    { value: 28, label: '08:00' },
    { value: 50, label: '12:00' },
    { value: 16, label: '16:00' },
    { value: 90, label: '20:00' },
  ];
  const lineData4 = [
    { value: 0, label: '00:00' },
    { value: 20, label: '04:00' },
    { value: 18, label: '08:00' },
    { value: 40, label: '12:00' },
    { value: 26, label: '16:00' },
    { value: 50, label: '20:00' },
  ];

  const getDevicesList = async () => {
    try {
      setisLoading(true);
      let obj = {
        plant: plant,
        routeVal: routeVal,
        token: Data,
      };
      dispatch(Services.getDeviceDetail(obj)).then(data => {
        //  console.log(data.payload.deviceData, 'from getDeviceDetail');
        if (data?.payload) {
          setdeviceData(data.payload.deviceData);
          //    setinverterDevices(InverterArray);
          //    setgridDevices(GridArray);
        }
        //   getBarChartData();
        setisLoading(false);
      });
    } catch (err) {
      ShowToast('error', 'No records.');
      setisLoading(false);
    } finally {
      // setisLoading(false);
    }
  };

  const getLIneChartDataTop = async date => {
    setisLoading(true);
    let obj = {
      plant: plant,
      token: Data,
      routeVal: routeVal,
      date: date,
    };
    try {
      dispatch(Services.getChartInverter1(obj)).then(data => {
        // console.log(
        //   JSON.stringify(data.payload?.IV_curve?.DCI?.length),
        //   'fgetChartInverter1',
        // );
        if (data?.payload?.KW?.Hz?.length > 0) {
          let itemGreen = data?.payload?.KW?.kw.map(item => {
            let properties = {
              value: Math.floor(item.value),
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            };
            return properties;
          });
          let itemYellow = data?.payload?.KW?.v.map(item => {
            let properties = {
              value: Math.floor(item.value),
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            };
            return properties;
          });
          let itemRed = data?.payload?.KW?.I.map(item => {
            let properties = {
              value: Math.floor(item.value),
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            };
            return properties;
          });
          let itemBlue = data?.payload?.KW?.Hz.map(item => {
            let properties = {
              value: Math.floor(item.value),
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            };
            return properties;
          });

          let itemGreen2 = data?.payload?.IV_curve?.DCI.map(item => {
            let properties = {
              value: Math.floor(item.value),
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            };
            return properties;
          });

          let itemYellow2 = data?.payload?.IV_curve?.DCV.map(item => {
            let properties = {
              value: Math.floor(item.value),
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            };
            return properties;
          });


          let maxB = itemBlue[0];
          //   console.log(maxB, 'maxB -->');
          for (let i = 1; i < itemBlue.length; ++i) {
            if (itemBlue[i].value > maxB.value) {
              maxB = itemBlue[i];
            }
            //    console.log(maxB, 'maxB');
          }
          let maxR = itemRed[0];
          for (let i = 1; i < itemRed.length; ++i) {
            if (itemRed[i].value > maxR.value) {
              maxR = itemRed[i];
            }
            //    console.log(maxR, 'maxR');
          }
          let maxY = itemYellow[0];
          for (let i = 1; i < itemYellow.length; ++i) {
            if (itemYellow[i].value > maxY.value) {
              maxY = itemYellow[i];
            }
            //  console.log(maxY, 'maxY');
          }
          let maxG = itemGreen[0];
          for (let i = 1; i < itemGreen.length; ++i) {
            if (itemGreen[i].value > maxG.value) {
              maxG = itemGreen[i];
            }
            //   console.log(maxG, 'maxG');
          }
          var largeVal = 100
          largeVal = Math.max(maxB?.value, maxR?.value, maxY?.value, maxG?.value);
          //  console.log(maxB?.value, maxR?.value, maxY?.value, maxG?.value, '-------->');
          //  console.log(largeVal, '-------->');

          setLoadMax(largeVal);

          let maxG2 = itemGreen2[0];
          for (let i = 1; i < itemGreen2.length; ++i) {
            if (itemGreen2[i].value > maxG2.value) {
              maxG2 = itemGreen2[i];
            }
            //  console.log(maxY, 'maxY');
          }
          let maxY2 = itemYellow2[0];
          for (let i = 1; i < itemYellow2.length; ++i) {
            if (itemYellow2[i].value > maxY2.value) {
              maxY2 = itemYellow2[i];
            }
            //   console.log(maxG, 'maxG');
          }
          var largeVal2 = 100
          largeVal2 = Math.max(maxY2?.value, maxG2?.value,);

          console.log(maxY2?.value, maxG2?.value, '-------->');
          console.log(largeVal2, '-------->');
          setLoadMax2(largeVal2+500)

          setDCI(itemGreen2);
          setDCV(itemYellow2);
          //   console.log(itemGreen, 'itemGreen');

          setLineDataGreen(itemGreen);
          setLineDataYellow(itemYellow);
          setLineDataRed(itemRed);
          setLineDataBlue(itemBlue);

          setisLoading(false);
        }
      });

      dispatch(Services.getdevice_details_chart_full_screen(obj)).then(data => {
        //  console.log(data.payload, 'CHarts ____----____');
        if (data?.payload) {
          sethtmlCode(data.payload);
          setisLoading(false);
        }
      });
      dispatch(Services.getdevice_details_chart_dc_data(obj)).then(data => {
        //  console.log(data.payload, 'CHarts ____----____');
        if (data?.payload) {
          sethtmlCodeDC(data.payload);
          setisLoading(false);
        }
      });
    } catch (err) {
      ShowToast('error', 'No records.');
      setisLoading(false);
    } finally {
      //  setisLoading(false);
    }
  };

  const getLIneChartDataIV = async date => { };

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
    // getLIneChartDataIV(today);
    // fun(today);
    setDateSelected(today);

    // funGetHistoryToday(today);
  };

  useEffect(() => {
    getDevicesList();
    getCurrentDate();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={styles.f1}>
      <DevicesHeader
        title={'Device Detail Inverter'}
        leftCallBack={() => navigation.goBack()}
      />

      <FullLineChartComp
        isModalVisible={isModalVisible}
        toggleModalOut={toggleModalOut}
        htmlCode={htmlCode}
      />


      <FullLineChartComp
        isModalVisible={isModalVisibleDC}
        toggleModalOut={toggleModalOutDC}
        htmlCode={htmlCodeDC}
      />

      <ScrollView>
        {/* DC Div */}
        <View style={style.pDiv}>
          <View style={styles.f4}>
            <Text style={styles.splanText2}>{routeVal?.device_name}</Text>
          </View>


          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: colors.fetBlack,
                fontSize: rfSpacing.l,
                fontWeight: 'bold',
                paddingLeft: rfSpacing.l,
              }}>
              DC Input
            </Text>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetGray,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                String
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetGray,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                Voltage- V
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetGray,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                Current- A
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                PV1
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV1_VOLTAGE)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV1_CURRENT)}
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                PV2
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV2_VOLTAGE)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV2_CURRENT)}
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                PV3
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV3_VOLTAGE)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV3_CURRENT)}
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                PV4
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV4_VOLTAGE)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.DC_INPUT_PV4_CURRENT)}
              </Text>
            </View>
          </View>

          {deviceData?.DC_INPUT_PV5_VOLTAGE &&
            deviceData?.DC_INPUT_PV5_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV5
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV5_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV5_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV6_VOLTAGE &&
            deviceData?.DC_INPUT_PV6_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV6
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV6_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV6_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV7_VOLTAGE &&
            deviceData?.DC_INPUT_PV7_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV7
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV7_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV7_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV8_VOLTAGE &&
            deviceData?.DC_INPUT_PV8_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV8
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV8_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV8_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV9_VOLTAGE &&
            deviceData?.DC_INPUT_PV9_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV9
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV9_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV9_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV10_VOLTAGE &&
            deviceData?.DC_INPUT_PV10_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV10
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV10_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV10_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV11_VOLTAGE &&
            deviceData?.DC_INPUT_PV11_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV11
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV11_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV11_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV12_VOLTAGE &&
            deviceData?.DC_INPUT_PV12_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV12
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV12_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV12_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV13_VOLTAGE &&
            deviceData?.DC_INPUT_PV13_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV13
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV13_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV13_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV14_VOLTAGE &&
            deviceData?.DC_INPUT_PV14_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV14
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV14_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV14_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV15_VOLTAGE &&
            deviceData?.DC_INPUT_PV15_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV15
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV15_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV15_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV16_VOLTAGE &&
            deviceData?.DC_INPUT_PV16_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV16
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV16_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV16_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV17_VOLTAGE &&
            deviceData?.DC_INPUT_PV17_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV17
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV17_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV17_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV18_VOLTAGE &&
            deviceData?.DC_INPUT_PV18_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV18
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV18_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV18_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV19_VOLTAGE &&
            deviceData?.DC_INPUT_PV19_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV19
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV19_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV19_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV20_VOLTAGE &&
            deviceData?.DC_INPUT_PV20_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV20
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV20_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV20_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV21_VOLTAGE &&
            deviceData?.DC_INPUT_PV21_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV21
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV21_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV21_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV22_VOLTAGE &&
            deviceData?.DC_INPUT_PV22_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV22
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV22_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV22_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV23_VOLTAGE &&
            deviceData?.DC_INPUT_PV23_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV23
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV23_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV23_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}

          {deviceData?.DC_INPUT_PV24_VOLTAGE &&
            deviceData?.DC_INPUT_PV24_CURRENT ? (
            <View style={styles.rowStart}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  PV24
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV24_VOLTAGE)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: colors.fetBlack,
                    fontSize: rfSpacing.l,
                    textAlign: 'center',
                  }}>
                  {twoDecimal(deviceData?.DC_INPUT_PV24_CURRENT)}
                </Text>
              </View>
            </View>
          ) : (
            <></>
          )}
        </View>
        {/* AC DIv  */}
        <View style={style.pDiv}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: colors.fetBlack,
                fontSize: rfSpacing.l,
                fontWeight: 'bold',
                paddingLeft: rfSpacing.l,
              }}>
              AC Output
            </Text>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetGray,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}></Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetGray,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                Grid Voltage- V
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetGray,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                Grid Current- A
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                A
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.AC_OUTLPUT_GRID_VOLTAGE_A)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.AC_OUTLPUT_GRID_CURRENT_A)}
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                B
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.AC_OUTLPUT_GRID_VOLTAGE_B)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.AC_OUTLPUT_GRID_CURRENT_B)}
              </Text>
            </View>
          </View>
          <View style={styles.rowStart}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                C
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.AC_OUTLPUT_GRID_VOLTAGE_C)}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: colors.fetBlack,
                  fontSize: rfSpacing.l,
                  textAlign: 'center',
                }}>
                {twoDecimal(deviceData?.AC_OUTLPUT_GRID_CURRENT_C)}
              </Text>
            </View>
          </View>
        </View>

        {/* Invertor DIv  */}
        <View style={style.pDiv}>
          {/* <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Invertor Status</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>{deviceData?.INVERTER_STATUS}</Text>
            </View>
          </View> */}
          <StatusCode INVERTER_STATUS={deviceData?.INVERTER_STATUS} />

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Yield Today</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>{deviceData?.YIELD_TODAY} Kwh</Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Total Today</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>{deviceData?.YIELD_TOTAL} Kwh</Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Active Power</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>{deviceData?.ACTIVE_POWER} Kw</Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Reactive Power</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>
                {deviceData?.REACTIVE_POWER} Kw
              </Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Invertor Rated Power</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>
                {deviceData?.INVERTER_RATED_POWER} Kw
              </Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Power Factor</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>{twoDecimal(deviceData?.POWER_FACTOR)}</Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Grid Frequency</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>
                {twoDecimal(deviceData?.GRID_FREQUENCY)} Hz
              </Text>
            </View>
          </View>

          <View style={styles.rowStart}>
            <View style={styles.f1}>
              <Text style={styles.leftTxt}>Internal Temprature</Text>
            </View>
            <View style={styles.f1}>
              <Text style={styles.rightTxt}>
                {twoDecimal(deviceData?.INTERNAL_TEMPERATURE)} C
              </Text>
            </View>
          </View>
        </View>

        {/* Time Card */}
        <TimeBar
          lineData={lineData}
          fun1={getLIneChartDataTop}
          fun2={getLIneChartDataIV}
          fun3={getLIneChartDataIV}
          fun4={getLIneChartDataIV}
          DateSelected={DateSelected}
          setDateSelected={setDateSelected}
        />

        {/* Line Chart */}

        <LineChart4Devices
          LoadMax={LoadMax > 0 ? LoadMax : 100}
          lineData={linedataGreen}
          lineData2={linedataYellow}
          lineData3={linedataRed}
          lineData4={linedataBlue}
          toggleModalIn={toggleModalIn}
        />

        <LineChart2Btns
          LoadMax={LoadMax2 > 0 ? LoadMax2 : 100}
          lineData={DCI} lineData2={DCV} toggleModalInDC={toggleModalInDC} />
      </ScrollView>

    </View>
  );
};
