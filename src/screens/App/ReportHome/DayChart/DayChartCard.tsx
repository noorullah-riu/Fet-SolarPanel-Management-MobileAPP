import React, { useState, useRef, useContext, useEffect } from 'react';
import {
  Text,
  Alert,
  Pressable,
  Dimensions,
  Image,
  View,
  ScrollView,
} from 'react-native';
import styles from '../style';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import down from '../../../../assets/_PlantDetail/down.png';

import TimeCard from '../../../../ui/TimePicker';
import { BarChart, LineChart } from 'react-native-gifted-charts';

import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import EnvoirmentalBenifits from '../Components/EnvoirmentalDiv';

import CircularChart from '../Components/CircularChartDiv';
import PieChartDiv from '../Components/PieChartDiv';
import FuelSaveBarChartDiv from '../Components/FuelSaveBarChart';

import EcomContext from '../../../../contextApi/DataProvider';
import ShowToast from '../../../../ui/Toast';
import Loader from '../../../../ui/Loader';
import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../../networking/auth/Services';
import { ruleTypes } from 'gifted-charts-core';
import { FullLineChartComp } from '../FullChart/FullChartComp';
import { WSImages } from '../../../../ui/Images';
import { VictoryBar, VictoryLine, VictoryScatter, VictoryZoomContainer, VictoryChart, VictoryArea, VictoryTheme } from "victory-native";
import LineChartDay from '../Components/LineChartDay';
//import { PinchGestureHandler } from 'react-native-gesture-handler';
// import Modal from "react-native-modal";
// import WebView from 'react-native-webview';
const { width } = Dimensions.get('window');
const screenWidth = Dimensions.get('window').width;

import Orientation from 'react-native-orientation-locker';


export const DayChartCard = ({ navigation }: any) => {
  const { plant, setplant, Data }: any = useContext(EcomContext);
  const dispatch = useDispatch();

  //console.log(plant, '--->Plant');a
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DateSelected, setDateSelected] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const [htmlCode, sethtmlCode] = useState('');

  const [pieData, setpieData] = useState([]);
  const [pieDataB, setpieDataB] = useState({});

  const [energyMan, setenergyMan] = useState({});
  const [circleData, setcircleData] = useState([]);



  const [GridStatus, setGridStatus] = useState(true);
  const [SolarStatus, setSolarStatus] = useState(true);
  const [GenStatus, setGenStatus] = useState(true);
  const [LoadStatus, setLoadStatus] = useState(true);
  const [LoadMax, setLoadMax] = useState(100);

  const [lineData, setlineData] = useState([
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
  const [lineData2, setlineData2] = useState([
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
  const [lineData3, setlineData3] = useState([
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
  const [lineData4, setlineData4] = useState([
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

  const [FSKW, setFSKW] = useState([
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
  ]);
  const [FSL, setFSL] = useState([
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
  ]);
  const [FSMIX, setFSMIX] = useState([
    {
      value: 0,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 0, frontColor: colors.fet3 },
    {
      value: 0,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 0, frontColor: colors.fet3 },
    {
      value: 0,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 0, frontColor: colors.fet3 },
  ]);
  const [FSReveue, setFSReveue] = useState('');

  const [envoirment, setenvoirment] = useState({});

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalIn = () => {
    Orientation.lockToLandscapeLeft();
    setModalVisible(!isModalVisible);
  };
  const toggleModalOut = () => {
    Orientation.lockToPortrait();
    setModalVisible(!isModalVisible);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = value => {
    // console.warn('A date has been picked: ', value);

    // console.log('------------', value.getFullYear());
    // console.log('------------', value.getMonth());
    // console.log('------------', value.getDate());

    var date = value.getDate(); //Current Date
    var month = value.getMonth() + 1; //Current Month
    var year = value.getFullYear(); //Current Year,.
    var today =
      (date < 10 ? '0' + date : date) +
      '-' +
      (month < 10 ? '0' + month : month) +
      '-' +
      year;
    console.log('today day', today);
    setDateSelected(today);
    var objTime = {
      date: date,
      month: month,
      year: year,
    };
    getDayChartData(objTime);
    // setfromDate(today);
    hideDatePicker();
  };

  const circleData2 = [
    { value: 70, color: colors.fetGreen },
    { value: 30, color: colors.fetYellow },
  ];
  const pieData2 = [
    { value: 54, color: '#cc0000' },
    { value: 40, color: '#00b33c' },
    { value: 20, color: '#ffcc00' },
  ];
  const lineDataS = [
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
  const lineData22 = [
    { value: 0, label: '00:00' },
    { value: 20, label: '04:00' },
    { value: 18, label: '08:00' },
    { value: 40, label: '12:00' },
    { value: 36, label: '16:00' },
    { value: 60, label: '20:00' },
  ];
  const lineData33 = [
    { value: 0, label: '00:00' },
    { value: 30, label: '04:00' },
    { value: 28, label: '08:00' },
    { value: 50, label: '12:00' },
    { value: 16, label: '16:00' },
    { value: 90, label: '20:00' },
  ];
  const lineData44 = [
    { value: 0, label: '00:00' },
    { value: 20, label: '04:00' },
    { value: 18, label: '08:00' },
    { value: 40, label: '12:00' },
    { value: 26, label: '16:00' },
    { value: 50, label: '20:00' },
  ];

  const barDataMix = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 20, frontColor: colors.fet3 },
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 40, frontColor: colors.fet3 },
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 25, frontColor: colors.fet3 },
    {
      value: 30,
      label: '09:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 20, frontColor: colors.fet3 },
    {
      value: 60,
      label: '12:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 40, frontColor: colors.fet3 },
    {
      value: 65,
      label: '15:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 30, frontColor: colors.fet3 },
    {
      value: 65,
      label: '18:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 30, frontColor: colors.fet3 },
    {
      value: 65,
      label: '21:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 30, frontColor: colors.fet3 },
  ];
  const barDataGreen = [
    {
      value: 40,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 50,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 75,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 30,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 60,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 65,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 65,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    {
      value: 65,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
  ];
  const barDataYellow = [
    {
      value: 40,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 50,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 75,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 30,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 60,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 65,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 65,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    {
      value: 65,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
  ];
  const dataDefault = [
    {
      value: 0,
      label: '00:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
  ];
  const item = [
    { quarter: '00.00', earnings: 900 },
    { quarter: '03.00', earnings: 1300 },
    { quarter: '06.00', earnings: 1600 },
    { quarter: '09.00', earnings: 2200 },
    { quarter: '12.00', earnings: 1700 },
    { quarter: '15.00', earnings: 1200 },
    { quarter: '18.00', earnings: 1000 },
    { quarter: '21.00', earnings: 800 },
  ];

  const callFunGro = () => {
    setGridStatus(!GridStatus);
    if (GridStatus) {
      setSolarStatus(true);
    }
  };
  const callFunGr = () => {
    setGridStatus(!GridStatus);
    if (GridStatus) {
      if (!GenStatus && !LoadStatus) {
        setSolarStatus(true);
      }
    }
  };
  const callFunSolo = () => {
    setSolarStatus(!SolarStatus);
    if (SolarStatus) {
      setGridStatus(true);
    }
  };
  const callFunSol = () => {
    setSolarStatus(!SolarStatus);
    if (SolarStatus) {
      if (!GenStatus && !LoadStatus) {
        setGridStatus(true);
      }
    }
  };
  const callFunGen = () => {
    setGenStatus(!GenStatus);
    if (GenStatus) {
      setGridStatus(true);
    }
  };
  const callFunLoad = () => {
    setLoadStatus(!LoadStatus);
    if (LoadStatus) {
      setGridStatus(true);
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
    console.log('today --->', date);
    setDateSelected(today);
    var objTime = {
      date: date,
      month: month,
      year: year,
    };
    getDayChartData(objTime);
    // funGetHistoryToday(today);
  };

  const getDayChartData = async objTime => {
    setisLoading(true);
    let object = {
      plant: plant,
      token: Data,
      Time: objTime,
    };
    try {
      dispatch(Services.getChartDaily(object)).then(data => {
        console.log(JSON.stringify(data?.payload), 'from stats day');
        //   const a = JSON.parse(message.payloadString);
        if (data?.payload?.message) {
          let arrayEM = [];
          for (const [key, value] of Object.entries(data?.payload?.energyMgt)) {
            if (key === 'consumed') {
              let objEM1 = {
                value: parseInt(value), // data.payload.energyMgt.consumed,
                color: colors.fetGreen,
              };
              arrayEM.push(objEM1);
            }
            if (key === 'fed_to_grid') {
              let objEM2 = {
                value: parseInt(value), //data.payload.energyMgt.fed_to_grid,
                color: colors.fetYellow,
              };
              arrayEM.push(objEM2);
            }
          }
          setcircleData(arrayEM);
          setenergyMan(data.payload.energyMgt);

          let arrayPD = [];
          for (const [key, value] of Object.entries(data?.payload?.pieData)) {
            if (key === 'grid') {
              let objPD1 = {
                value: parseInt(value),
                color: colors.fet1,
                text: `${parseInt(data?.payload?.pieData?.pergrid)}%`,
              };
              arrayPD.push(objPD1);
            }
            if (key === 'solar') {
              let objPD2 = {
                value: parseInt(value),
                color: colors.fet2,
                text: `${parseInt(data?.payload?.pieData?.persolar)}%`,
              };
              arrayPD.push(objPD2);
            }
            if (key === 'generator') {
              let objPD3 = {
                value: parseInt(value),
                color: colors.fet3,
                text: `${parseInt(data?.payload?.pieData?.pergeneratorr)}%`,
              };
              arrayPD.push(objPD3);
            }
          }

          setpieData(arrayPD);
          setpieDataB(data?.payload?.pieData);
          setenvoirment(data?.payload?.invironmental_benefits);

          if (data?.payload?.kwh) {
            console.log("here is compiler");
            let propertiesItemG = data?.payload?.kwh?.grid?.map(item => {
              let propertties = {
                value: Math.floor(parseInt(item.value)),// Math.floor(item.value) || 0,
                label: item?.label || '00:00',
                labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.xs }, //'',
              };
              return propertties;
            });

            if (propertiesItemG != undefined && propertiesItemG?.length != 0) {

              var maxG = propertiesItemG[0];
              for (let G = 1; G < propertiesItemG?.length; ++G) {
                //        console.log(propertiesItemG[G], '-----> propertiesItemG  ');
                if (propertiesItemG[G]?.value > maxG?.value) {
                  maxG = propertiesItemG[G];
                }
              }
              console.log(maxG?.value, '-----> Max Grid ');


              //   const slicedArrayG = propertiesItemG.slice(0, 50);
              setlineData(propertiesItemG);
            }

            let propertiesItemS = data?.payload?.kwh?.solar?.map(item => {
              let propertties = {
                value: Math.floor(parseInt(item.value)) || 0,//Math.floor(item.value) || 0,
                label: item?.label || '00:00',
                labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.s }, //'',
              };
              return propertties;
            });
            if (propertiesItemS != undefined && propertiesItemS?.length != 0) {
              //   const slicedArrayS = propertiesItemS.slice(0, 50);

              var maxSo = propertiesItemS[0];
              for (let L = 1; L < propertiesItemS?.length; ++L) {
                //        console.log(propertiesItemS[L], '-----> propertiesItemS  ');
                if (propertiesItemS[L]?.value > maxSo?.value) {
                  maxSo = propertiesItemS[L];
                }
              }
              console.log(maxSo?.value, '-----> Max SOl ');


              setlineData2(propertiesItemS);
            }

            let propertiesItemGen = data?.payload?.kwh?.gen?.map(item => {
              let propertties = {
                value: Math.floor(parseInt(item.value)) || 0,// Math.floor(item.value) || 0,
                label: item?.label || '00:00',
                labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.s }, //'',
              };
              return propertties;
            });
            if (
              propertiesItemGen != undefined &&
              propertiesItemGen?.length != 0
            ) {
              //   const slicedArrayG = propertiesItemGen.slice(0, 50);
              setlineData3(propertiesItemGen);

            }

            let propertiesItemLoad = data?.payload?.kwh?.load?.map(item => {
              let propertties = {
                value: Math.floor(parseInt(item.value)),// Math.floor(item?.value) || 0,
                label: item?.label || '00:00',
                labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.s }, //'',
              };
              return propertties;
            });
            if (
              propertiesItemLoad != undefined ||
              propertiesItemLoad?.length != 0
            ) {

              //      const slicedArrayL = propertiesItemLoad.slice(0, 50);
              setlineData4(propertiesItemLoad);
            }


            //  var max_of_array = Math.max.apply(Math, data?.payload?.kwh?.load?.value);
            // var min = Math.min(...propertiesItemLoad.value);
            // var max = Math.max(...propertiesItemLoad.value);
            //   console.log('max is >>>>', max.value);

            //   const slicedArray = propertiesItemG.slice(0, 6);

            console.log(propertiesItemG.length, '-----> propertiesItemG ');
            console.log(propertiesItemGen.length, '-----> propertiesItemGen ');
            console.log(propertiesItemLoad.length, '-----> propertiesItemLoad ');
            console.log(propertiesItemS.length, '-----> propertiesItemS ');

            // console.log(propertiesItemG[0], '-----> propertiesItemG ');
            //  console.log(propertiesItemGen, '-----> propertiesItemGen ');
            //   console.log(propertiesItemLoad[0], '-----> propertiesItemLoad ');
            //     console.log(propertiesItemS, '-----> propertiesItemS ');
            //     console.log( 'before -----> Max Load ');

            // let maxS = propertiesItemS[0];
            // for (let i = 1; i < propertiesItemS?.length; ++i) {
            //   if (propertiesItemS[i] > maxS) {
            //     maxS = propertiesItemS[i];
            //     console.log(maxS, '-----> MaxS  ');
            //   }
            // }
            // console.log(maxS?.value, '-----> MaxS');

            //     let maxG = propertiesItemG[0];
            // for (let i = 1; i < propertiesItemG?.length; ++i) {
            //   if (propertiesItemG[i] > maxG) {
            //     maxG = propertiesItemG[i];
            //     console.log(maxG, '-----> MaxG  ');
            //   }
            // }
            // console.log(maxG?.value, '-----> MaxG');

            let max = propertiesItemLoad[0];
            for (let i = 1; i < propertiesItemLoad?.length; ++i) {
              //       console.log(propertiesItemLoad[i], '-----> propertiesItemLoad  ');

              if (propertiesItemLoad[i]?.value > max?.value) {
                max = propertiesItemLoad[i];
                //  console.log(max, '-----> Max  ');
              }
            }
            console.log(max?.value, '-----> Max Load ');


            let maxGen = propertiesItemGen[0];
            for (let k = 1; k < propertiesItemGen?.length; ++k) {
              //      console.log(propertiesItemGen[k], '-----> propertiesItemGen  ');
              if (propertiesItemGen[k]?.value > maxGen?.value) {
                maxGen = propertiesItemGen[k];
              }
            }
            console.log(maxGen?.value, '-----> Max Gen ');

            var largeVal = 100
            largeVal = Math.max(max?.value, maxGen?.value, maxSo?.value, maxG?.value);


            console.log(largeVal, " largeVal ---->");
            // if (){

            // }
            setLoadMax(largeVal);
          }

          if (data?.payload?.fuel_save?.kwh?.length > 0) {
            let itemFSKW = data?.payload?.fuel_save?.kwh?.map(item => {
              let properties = {
                value: item.value || 0,
                label: item.label,
                labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
                spacing: 60,
                labelWidth: 30,
                frontColor: colors.fet2,
              };
              return properties;
            });

            let itemFSL = data?.payload?.fuel_save?.litters?.map(item => {
              let properties = {
                value: item.value || 0,
                label: item.label,
                labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
                spacing: 60,
                labelWidth: 30,
                frontColor: colors.fet3,
              };
              return properties;
            });

            let itemMix = [];
            if (itemFSL.length > 0) {
              itemFSL.forEach(function (item, index) {
                let properties = {};
                let properties2 = {};
                itemFSKW.forEach(function (item2, index2) {
                  if (item2.label === item.label) {
                    //   console.log(item, index);
                    properties = {
                      value: Math.floor(item.value),
                      label: item.label,
                      spacing: 30,
                      labelWidth: 30,
                      labelTextStyle: {
                        color: colors.fetGray,
                        fontSize: rfSpacing.m,
                      },
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
                  } else {
                    //   itemMix.push(null);
                    //   itemMix.push(null);
                  }
                });
                itemMix.push(properties);
                itemMix.push(properties2);
              });

            }
            setFSL(itemFSL);
            setFSKW(itemFSKW);
            setFSMIX(itemMix);
            setFSReveue(data?.payload?.fuel_save?.revenue?.total);
          }
          setisLoading(false);
        }
      });

      dispatch(Services.getChartDailyFullScreen(object)).then(data => {
        //  console.log(data.payload, 'CHarts ____----____');
        if (data?.payload) {
          sethtmlCode(data.payload);
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


  const PointerLabelComponent = ({ items }) => {
    const memoizedPointerLabel = React.useMemo(() => {
      return (
        <View
          style={{
            height: 90,
            width: 100,
            justifyContent: 'center',
            marginTop: 'auto',
          }}>
          {/* <Text style={styles.LCPointerTextGray}>
            {items[0]?.label || 'N/A'}
          </Text> */}

          {GridStatus && (
            <View style={styles.LCLabelTxtWrap}>
              <Text style={styles.LCPointerTextRed}>
                items[0]?.value || 'N/A'
              </Text>
            </View>
          )}


          {SolarStatus && (
            <View style={styles.LCLabelTxtWrap}>
              <Text style={styles.LCPointerTextGreen}>
                {items[1]?.value || 'N/A'}
              </Text>
            </View>
          )}
          {GenStatus && (
            <View style={styles.LCLabelTxtWrap}>
              <Text style={styles.LCPointerTextYellow}>
                {items[2]?.value || 'N/A'}
              </Text>
            </View>
          )}
          {LoadStatus && (
            <View style={styles.LCLabelTxtWrap}>
              <Text style={styles.LCPointerTextBlue}>
                {items[3]?.value || 'N/A'}
              </Text>
            </View>
          )}
        </View>
      );
    }, [GridStatus]);

    return memoizedPointerLabel;
  };
  // const renderPointerValue = React.useMemo((items) => {
  //   return (
  //     <Text style={styles.LCPointerTextRed}>
  //       {items[0]?.value}
  //     </Text>
  //   );
  // }, [items[0]?.value]);
  const [isPointerActive, setIsPointerActive] = useState(false);

  const pointerLabelComponent2 = (items) => {
    return (
      <View
        style={{
          height: 90,
          width: 100,
          justifyContent: 'center',
          marginTop: 'auto',
          // marginLeft: 40,
        }}>
        <Text style={styles.LCPointerTextGray}>
          {items[0].label || 'N/A'}
        </Text>

        {GridStatus ? (
          <View style={styles.LCLabelTxtWrap}>
            <Text style={styles.LCPointerTextRed}>
              {items[0]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}



        {SolarStatus ? (
          <View style={styles.LCLabelTxtWrap}>
            <Text style={styles.LCPointerTextGreen}>
              {items[1]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}
        {GenStatus ? (
          <View style={styles.LCLabelTxtWrap}>
            <Text style={styles.LCPointerTextYellow}>
              {items[2]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}
        {LoadStatus ? (
          <View style={styles.LCLabelTxtWrap}>
            <Text style={styles.LCPointerTextBlue}>
              {items[3]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  }
  const memoChild = React.useMemo(() => <LineChartDay
    LoadMax={LoadMax > 0 ? LoadMax : 100} GridStatus={GridStatus}
    SolarStatus={SolarStatus} GenStatus={GenStatus}
    LoadStatus={LoadStatus}
    lineData={lineData}
    lineData2={lineData2}
    lineData3={lineData3}
    lineData4={lineData4}
    isPointerActive={isPointerActive} setIsPointerActive={setIsPointerActive}
  />
    , [GenStatus, LoadMax, LoadStatus, GridStatus, SolarStatus, isPointerActive, lineData, lineData2, lineData3, lineData4]);

  useEffect(() => {
    getCurrentDate();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <ScrollView>
      <FullLineChartComp
        isModalVisible={isModalVisible}
        toggleModalOut={toggleModalOut}
        htmlCode={htmlCode}
      />

      {/* Time Card */}
      <TimeCard
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={styles.timeDiv}>
        <Pressable
          onPress={() => showDatePicker()}
          style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'flex-end', flex: 2 }}>
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
              style={{ height: rfSpacing.xl, width: rfSpacing.xl }}
            />
          </View>
        </Pressable>
      </View>

      {/* CIrcular Chart */}
      <CircularChart circleData={circleData} energyMan={energyMan} />


      {/* Pie Chart */}
      <PieChartDiv type={'Today'} pieDataB={pieDataB} pieData={pieData} />

      {/* Line Chart */}
      <View style={styles.pDiv}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.CCTextY}>KW </Text>
          </View>
          <Pressable
            onPress={toggleModalIn}
            //   onPress={() => navigation.navigate("FullLineChart")} //
            style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
            <Text style={styles.CCTextD}>Full Screen</Text>
          </Pressable>
        </View>
        <ScrollView horizontal>
          {memoChild}
        </ScrollView>


        <>
          {/* <View style={styles.LCWraper}>
            <LineChart
              areaChart
              //     isAnimated={true}
              curved
              thickness={0.5}
              //   hideDataPoints={true}
              //       noOfSections={10}
              maxValue={LoadMax}
              data={
                GridStatus
                  ? lineData
                  : SolarStatus
                    ? lineData2
                    : GenStatus
                      ? lineData3
                      : lineData4
              }
              data2={SolarStatus === true ? lineData2 : dataDefault}
              data3={GenStatus === true ? lineData3 : dataDefault}
              data4={LoadStatus === true ? lineData4 : dataDefault}
              height={150}
              width={screenWidth}
              yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
              initialSpacing={5}
              yAxisColor="#aaa"
              xAxisColor="#aaa"
              color1="#cc0000"
              color2="#00b33c"
              color3="#ffcc00"
              color4="#9fbbf4"
              textColor1="green"
              hideDataPoints
              //     disableScroll={true}
              //   rotateLabel
              //     dataPointsColor1="blue"
              //    dataPointsColor2="red"
              startFillColor1="#cc0000"
              startFillColor2="#00b33c"
              startFillColor3="#ffcc00"
              startFillColor4="#9fbbf4"
              hideRules
              startOpacity={0.4}
              endOpacity={0.1}
              rulesType={ruleTypes.SOLID}
              rulesColor="gray"
              //    onPointerActivate={handlePointerActivation}
              //   onPointerDeactivate={handlePointerDeactivation}
              pointerConfig={{

                //        activatePointersOnLongPress: true,
                activatePointersOnLongPress: false,
                autoAdjustPointerLabelPosition: true,
                //      activatePointersDelay: 0,
                strokeDashArray: [2, 5],
                radius: 2,
                persistPointer: true,
                pointerVanishDelay: 10000,
                pointerStripColor: 'black',
                pointerStripWidth: 2,
                pointerColor: 'red',
                pointerStripUptoDataPoint: true,
                activatePointersDelay: 150,
                //   pointerLabelComponent: pointerLabelComponent,

                // Your existing pointerConfig
                pointerLabelComponent: (props) => (
                  <PointerLabelComponent
                    items={props?.items}
                  />
                ),


                // pointerLabelComponent: items => {
                //   const memoizedPointerLabel = React.useMemo(() => {
                //     return (
                //       <View
                //         style={{
                //           height: 120,
                //           width: 100,
                //           backgroundColor: '#282C3E',
                //           borderRadius: 4,
                //           justifyContent: 'center',
                //           paddingLeft: 16,
                //         }}>
                //         <Text style={{ color: 'lightgray', fontSize: 12 }}>{2018}</Text>
                //         <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[0].value}</Text>
                //         <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{2019}</Text>
                //         <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[1].value}</Text>
                //       </View>
                //     );

                //   }, [ LoadStatus]);

                //   return memoizedPointerLabel;
                // },

              }}
            />
          </View> */}
        </>

        <View style={styles.LCBtnWraper}>
          <Pressable
            onPress={() => callFunGr()}
            style={GridStatus === true ? styles.activeDiv : styles.inActiveDiv}>
            <View style={styles.RCC}>
              <View style={styles.CC1}>
                <View style={styles.btnCircleRed}></View>
              </View>
              <View style={styles.LCBtnTextWrap}>
                <Text style={styles.LCBtnText}>Grid</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFunSol()}
            style={
              SolarStatus === true ? styles.activeDiv : styles.inActiveDiv
            }>
            <View style={styles.RCC}>
              <View style={styles.CC1}>
                <View style={styles.btnCircleGreen}></View>
              </View>
              <View style={styles.LCBtnTextWrap}>
                <Text style={styles.LCBtnText}>Solar</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFunGen()}
            style={GenStatus === true ? styles.activeDiv : styles.inActiveDiv}>
            <View style={styles.RCC}>
              <View style={styles.CC1}>
                <View style={styles.btnCircleYellow}></View>
              </View>
              <View style={styles.LCBtnTextWrap}>
                <Text style={styles.LCBtnText}>Gen</Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFunLoad()}
            style={LoadStatus === true ? styles.activeDiv : styles.inActiveDiv}>
            <View style={styles.RCC}>
              <View style={styles.CC1}>
                <View style={styles.btnCircleBlue}></View>
              </View>
              <View style={styles.LCBtnTextWrap}>
                <Text style={styles.LCBtnText}>Load</Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
      {/* Bar Chart */}



      <FuelSaveBarChartDiv
        reveue={FSReveue}
        barDataMix={FSMIX}
        barDataGreen={FSKW}
        barDataYellow={FSL}
      />

      {/* Envoirmental Div */}
      <EnvoirmentalBenifits lineData={envoirment} />
    </ScrollView>
  );
};
