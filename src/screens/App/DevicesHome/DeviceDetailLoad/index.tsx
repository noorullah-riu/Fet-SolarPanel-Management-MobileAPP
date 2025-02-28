import React, {useState, useContext, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';

import style from '../styles';
import DevicesHeader from '../../../../ui/DevicesHeader';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';

import LineChart4Devices from '../Components/LineChart4Devices';
import BarChart4Load from '../Components/BarChart4Load';
import TimeBar from '../Components/TimeBar';

import Loader from '../../../../ui/Loader';
import ShowToast from '../../../../ui/Toast';
import EcomContext from '../../../../contextApi/DataProvider';
import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../../networking/auth/Services';
import {twoDecimal} from '../../../../utiltyFunc';
export const DeviceDetailLoad = ({navigation, route}: any) => {
  const {plant, setplant, Data}: any = useContext(EcomContext);
  const {routeVal} = route.params;
  //console.log(routeVal, '-----> Device Item Selected');
  const [isLoading, setisLoading] = useState(false);
  const [deviceData, setdeviceData] = useState({});

  const [DateSelected, setDateSelected] = useState('');

  const [linedataGreen, setLineDataGreen] = useState([]);
  const [linedataYellow, setLineDataYellow] = useState([]);
  const [linedataRed, setLineDataRed] = useState([]);
  const [linedataBlue, setLineDataBlue] = useState([]);

  const [KI, setKI] = useState([]);
  const [KE, setKE] = useState([]);
  const [Mix, setMix] = useState([]);
  const [KHead, setKHead] = useState({});

  const dispatch = useDispatch();

  const barDataMix = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 20, frontColor: colors.fet3},
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 40, frontColor: colors.fet3},
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 25, frontColor: colors.fet3},
    {
      value: 30,
      label: '09:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 20, frontColor: colors.fet3},
    {
      value: 60,
      label: '12:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 40, frontColor: colors.fet3},
    {
      value: 65,
      label: '15:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 30, frontColor: colors.fet3},
    {
      value: 65,
      label: '18:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 30, frontColor: colors.fet3},
    {
      value: 65,
      label: '21:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {value: 30, frontColor: colors.fet3},
  ];
  const barDataGreen = [
    {
      value: 40,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 50,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 75,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 30,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 60,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 65,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 65,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
    {
      value: 65,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet2,
    },
  ];
  const barDataYellow = [
    {
      value: 40,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 50,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 75,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 30,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 60,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 65,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 65,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
    {
      value: 65,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
      frontColor: colors.fet3,
    },
  ];

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
  const lineData2 = [
    {value: 0, label: '00:00'},
    {value: 20, label: '04:00'},
    {value: 18, label: '08:00'},
    {value: 40, label: '12:00'},
    {value: 36, label: '16:00'},
    {value: 60, label: '20:00'},
  ];
  const lineData3 = [
    {value: 0, label: '00:00'},
    {value: 30, label: '04:00'},
    {value: 28, label: '08:00'},
    {value: 50, label: '12:00'},
    {value: 16, label: '16:00'},
    {value: 90, label: '20:00'},
  ];
  const lineData4 = [
    {value: 0, label: '00:00'},
    {value: 20, label: '04:00'},
    {value: 18, label: '08:00'},
    {value: 40, label: '12:00'},
    {value: 26, label: '16:00'},
    {value: 50, label: '20:00'},
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
        //  console.log(data.payload, 'from getDeviceDetailLoad');
        if (data?.payload) {
          setdeviceData(data.payload.deviceData);
          //    setinverterDevices(InverterArray);
          //    setgridDevices(GridArray);
        }
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
        console.log(JSON.stringify(data.payload), 'fgetChartLoad');
        let itemGreen = data?.payload?.KW?.kw?.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m}, //'',
          };
          return properties;
        });

        let itemYellow = data?.payload?.KW?.v.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m}, //'',
          };
          return properties;
        });
        let itemRed = data?.payload?.KW?.I.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m}, //'',
          };
          return properties;
        });
        let itemBlue = data?.payload?.KW?.Hz.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m}, //'',
          };
          return properties;
        });

        let itemGreen2 = data?.payload?.Kwh?.kwh_import.map(item => {
          let properties = {
            value: Math.floor(item.value),
            label: item.label,
            spacing: 30,
            labelWidth: 30,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
            frontColor: colors.fet2,
          };
          return properties;
        });

        let itemYellow2 = data?.payload?.Kwh?.kwh_export.map(item => {
          let properties = {
            value: Math.floor(item.value),
            label: item.label,
            spacing: 30,
            labelWidth: 30,
            labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
            frontColor: colors.fet3,
          };
          return properties;
        });

        let itemMix = [];
        itemGreen2.forEach(function (item, index) {
          let properties = {};
          let properties2 = {};
          itemYellow2.forEach(function (item2, index2) {
            if (item2.label === item.label) {
              //   console.log(item, index);
              properties = {
                value: Math.floor(item.value),
                label: item.label,
                spacing: 1,
                labelWidth: 30,
                labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
                frontColor: colors.fet2,
              };
              properties2 = {
                value: Math.floor(item2.value),
                //   label: item2.label,
                //   spacing: 30,
                //   labelWidth: 30,
                //  labelTextStyle: {color: colors.fetGray, fontSize: rfSpacing.m},
                frontColor: colors.fet3,
              };
              itemMix.push(properties);
              itemMix.push(properties2);
            } else {
              itemMix.push(null);
              itemMix.push(null);
            }
          });
        });

        console.log(itemMix, 'itemMix');
        setMix(itemMix);
        setKHead(data?.payload?.header);
        setKI(itemGreen2);
        setKE(itemYellow2);
        setLineDataGreen(itemGreen);
        setLineDataYellow(itemYellow);
        setLineDataRed(itemRed);
        setLineDataBlue(itemBlue);

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
  const getLIneChartDataIV = async date => {
    console.log('called fun 2');
  };

  useEffect(() => {
    getDevicesList();
    getCurrentDate();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={style.f1}>
      <DevicesHeader
        title={'Device Detail Load'}
        leftCallBack={() => navigation.goBack()}
      />

      <ScrollView>
        {/* Invertor DIv  */}
        <View style={style.pDiv}>
          <View style={style.f4}>
            <Text style={style.splanText2}>{routeVal?.device_name}</Text>
          </View>
          <View style={style.rowStart}>
            <View style={style.f2}>
              <Text style={style.leftTxt}>Phase to Neutral Voltage L1-N</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Phase_to_Neutral_Voltage_L1_N) || 0}
                Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f2}>
              <Text style={style.leftTxt}>Phase to Neutral Voltage L2-N</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Phase_to_Neutral_Voltage_L2_N) || 0}{' '}
                Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f2}>
              <Text style={style.leftTxt}>Phase to Neutral Voltage L3-N</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Phase_to_Neutral_Voltage_L3_N) || 0}{' '}
                Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={{flex: 3}}>
              <Text style={style.leftTxt}>
                Average Phase to Neutral Voltage
              </Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Average_Phase_to_Neutral_Voltage) || 0}{' '}
                Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f2}>
              <Text style={style.leftTxt}>Phase to Phase Voltage L1-L2</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Phase_to_Phase_Voltage_L1_L2) || 0} Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f2}>
              <Text style={style.leftTxt}>Phase to Phase Voltage L2-L3</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Phase_to_Phase_Voltage_L2_L3) || 0} Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f2}>
              <Text style={style.leftTxt}>Phase to Phase Voltage L3-L1</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Phase_to_Phase_Voltage_L3_L1) || 0} Volt
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={{flex: 3}}>
              <Text style={style.leftTxt}>Average Phase to Phase Voltage</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Average_Phase_to_Phase_Voltage) || 0}{' '}
                Volt
              </Text>
            </View>
          </View>
        </View>
        {/* Invertor DIv Time */}
        <View style={style.pDiv}>
          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Current L1</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Current_L1) || 0} Amps
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Current L2</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Current_L2) || 0} Amps
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Current L3</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Current_L3) || 0} Amps
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Average Current</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Average_Current) || 0} Amps
              </Text>
            </View>
          </View>
        </View>
        {/* Output mode DIv  */}
        <View style={style.pDiv}>
          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Active Power L1</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Active_Power_L1) || 0} KW
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Active Power L2</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Active_Power_L2) || 0} KW
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Active Power L3</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Active_Power_L3) || 0} KW
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Total Active Power</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Total_Active_Power) || 0} KW
              </Text>
            </View>
          </View>
        </View>
        {/* Output mode DIv  */}
        <View style={style.pDiv}>
          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Power Factor L1</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Power_Factor_L1) || 0}
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Power Factor L2</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Power_Factor_L2) || 0}
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Power Factor L3</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Power_Factor_L3) || 0}
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Average PF</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Average_Power_Factor) || 0}
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Frequency</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Frequency) || 0} HZ
              </Text>
            </View>
          </View>

          <View style={style.rowStart}>
            <View style={style.f1}>
              <Text style={style.leftTxt}>Consumption</Text>
            </View>
            <View style={style.f1}>
              <Text style={style.rightTxt}>
                {twoDecimal(deviceData?.Frequency) || 0} KWH
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
        {/* Line Chart */}
        <LineChart4Devices
          lineData={linedataGreen}
          lineData2={linedataYellow}
          lineData3={linedataRed}
          lineData4={linedataBlue}
        />
        {/* Bar Chart */}
        <BarChart4Load KHead={KHead} barDataMix={Mix} barDataGreen={KI} barDataYellow={KE} />
      </ScrollView>
    </View>
  );
};
