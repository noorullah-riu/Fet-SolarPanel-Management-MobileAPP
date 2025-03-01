import React, { useState, useCallback, useContext, useEffect } from 'react';
import { Text, Alert, Pressable, Image, View, ScrollView } from 'react-native';
import styles from '../style';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import down from '../../../../assets/_PlantDetail/down.png';

import CircularChart from '../Components/CircularChartDiv';
import EnvoirmentalBenifits from '../Components/EnvoirmentalDiv';
import PieChartDiv from '../Components/PieChartDiv';
import FuelSaveBarChartDiv from '../Components/FuelSaveBarChart';
import BarChart4LinesDiv from '../Components/BarChart4Lines';
import TimeCard from '../../../../ui/TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../../networking/auth/Services';
import EcomContext from '../../../../contextApi/DataProvider';
import ShowToast from '../../../../ui/Toast';
import Loader from '../../../../ui/Loader';
import moment from 'moment';
import MonthPicker from 'react-native-month-year-picker';

export const MonthChartCard = ({ navigation }: any) => {
  const { plant, setplant, Data }: any = useContext(EcomContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DateSelected, setDateSelected] = useState('');
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
    var today = (month < 10 ? '0' + month : month) + '-' + year;
    console.log('today', today);
    setDateSelected(today);
    getMonthChartData(today);
    // setfromDate(today); 
    hideDatePicker();
  };


  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showPicker = useCallback((value) => setShow(value), []);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      showPicker(false);



      let newDateD = moment.utc(selectedDate).format('DD');
      console.log('converted date', newDateD);

      //  var month = moment(selectedDate, 'YYYY-MM-DDTHH:mm:ss.SSS[Z]').format('MM');
      console.log('converted Month L', month);

      let newDateM = moment(selectedDate).format('MM');
      console.log('converted Month', newDateM);


      let newDateY = moment.utc(selectedDate).format('YYYY');
      console.log('converted date', newDateY);

      setDateSelected(`${newDateM}-${newDateY}`);
      setDate(selectedDate);

      var objTime = {
        date: newDateD,
        month: newDateM,
        year: newDateY,
      };
      getMonthChartData(objTime);

      //   getMonthChartData(newDateM);

    },
    [date, showPicker],
  );

  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();

  const [pieData, setpieData] = useState([]);
  const [pieDataB, setpieDataB] = useState({});

  const [energyMan, setenergyMan] = useState({});
  const [circleData, setcircleData] = useState([]);

  const [envoirment, setenvoirment] = useState({});

  const [barDataRed, setbarDataRed] = useState([]);
  const [barDataGreen, setbarDataGreen] = useState([]);
  const [barDataYellow, setbarDataYellow] = useState([]);
  const [barDataBlue, setbarDataBlue] = useState([]);
  const [barDataMix, setbarDataMix] = useState([]);

  const [barDataMix4GRGE, setbarDataMix4GRGE] = useState([]);
  const [barDataMix4GRSO, setbarDataMix4GRSO] = useState([]);
  const [barDataMix4GRLO, setbarDataMix4GRLO] = useState([]);
  const [barDataMix4GESO, setbarDataMix4GESO] = useState([]);
  const [barDataMix4GELO, setbarDataMix4GELO] = useState([]);
  const [barDataMix4SOLO, setbarDataMix4SOLO] = useState([]);

  const [barDataMixGRGESO, setbarDataMixGRGESO] = useState([]);
  const [barDataMixGRGELO, setbarDataMixGRGELO] = useState([]);
  const [barDataMixGRSOLO, setbarDataMixGRSOLO] = useState([]);
  const [barDataMixGESOLO, setbarDataMixGESOLO] = useState([]);


  const [BarKwh, setBarKwh] = useState(true);
  const [BarLitter, setBarLitter] = useState(true);

  const [FSKW, setFSKW] = useState([]);
  const [FSL, setFSL] = useState([]);
  const [FSMIX, setFSMIX] = useState([]);
  const [FSReveue, setFSReveue] = useState('');

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
  const circleData1 = [
    { value: 70, color: colors.fetGreen },
    { value: 30, color: colors.fetYellow },
  ];
  const pieData1 = [
    { value: 54, color: '#cc0000' },
    { value: 40, color: '#00b33c' },
    { value: 20, color: '#ffcc00' },
  ];
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

  const barDataMix4GRGEL = [
    {
      value: 40,
      label: '00:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fet3 },

    {
      value: 50,
      label: '03:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fet3 },
    {
      value: 75,
      label: '06:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 25, frontColor: colors.fet3 },
    {
      value: 30,
      label: '09:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fet3 },
    {
      value: 60,
      label: '12:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fet3 },
    {
      value: 65,
      label: '15:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fet3 },
    {
      value: 65,
      label: '18:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fet3 },
    {
      value: 65,
      label: '21:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fet3 },
  ];
  const barDataMix4GRSOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fet2 },

    {
      value: 50,
      label: '03:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fet2 },
    {
      value: 75,
      label: '06:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 25, frontColor: colors.fet2 },
    {
      value: 30,
      label: '09:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fet2 },
    {
      value: 60,
      label: '12:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fet2 },
    {
      value: 65,
      label: '15:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fet2 },
    {
      value: 65,
      label: '18:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fet2 },
    {
      value: 65,
      label: '21:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fet2 },
  ];
  const barDataMix4GRLOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fetBlue },

    {
      value: 50,
      label: '03:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fetBlue },
    {
      value: 75,
      label: '06:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 25, frontColor: colors.fetBlue },
    {
      value: 30,
      label: '09:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fetBlue },
    {
      value: 60,
      label: '12:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fetBlue },
    {
      value: 65,
      label: '15:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fetBlue },
    {
      value: 65,
      label: '18:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fetBlue },
    {
      value: 65,
      label: '21:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 30, frontColor: colors.fetBlue },
  ];
  const barDataMix4GESOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 20, frontColor: colors.fet2 },

    {
      value: 50,
      label: '03:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 40, frontColor: colors.fet2 },
    {
      value: 75,
      label: '06:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 25, frontColor: colors.fet2 },
  ];
  const barDataMix4GELOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 20, frontColor: colors.fetBlue },

    {
      value: 50,
      label: '03:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 40, frontColor: colors.fetBlue },
    {
      value: 75,
      label: '06:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 25, frontColor: colors.fetBlue },
  ];
  const barDataMix4SOLOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 20, frontColor: colors.fetBlue },

    {
      value: 50,
      label: '03:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 40, frontColor: colors.fetBlue },
    {
      value: 75,
      label: '06:00',
      spacing: 10,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 25, frontColor: colors.fetBlue },
  ];
  const barDataMixGRGESOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 20, frontColor: colors.fet3, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 40, frontColor: colors.fet3, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 25, frontColor: colors.fet3, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
  ];
  const barDataMixGRGELOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fet3, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fet3, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 25, frontColor: colors.fet3, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
  ];
  const barDataMixGRSOLOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 20, frontColor: colors.fet2, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 40, frontColor: colors.fet2, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    { value: 25, frontColor: colors.fet2, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
  ];
  const barDataMixGESOLOL = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 20, frontColor: colors.fet2, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 40, frontColor: colors.fet2, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet3,
    },
    { value: 25, frontColor: colors.fet2, spacing: 0 },
    { value: 25, frontColor: colors.fetBlue, spacing: 10 },
  ];
  const barDataMix8 = [
    {
      value: 40,
      label: '00:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 20, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 50,
      label: '03:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 40, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 75,
      label: '06:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 25, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 30,
      label: '09:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 20, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 60,
      label: '12:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 40, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 65,
      label: '15:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 30, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 65,
      label: '18:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 30, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
    {
      value: 65,
      label: '21:00',
      spacing: 0,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet2,
    },
    { value: 30, frontColor: colors.fet3, spacing: 0 },
    { value: 30, frontColor: colors.fetBlue, spacing: 0 },
    { value: 25, frontColor: colors.fet1, spacing: 10 },
  ];
  const barDataGreen2 = [
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
  const barDataYellow2 = [
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
  const barDataBlue2 = [
    {
      value: 10,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 40,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 45,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 60,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 30,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 95,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 25,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
    {
      value: 15,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fetBlue,
    },
  ];
  const barDataRed1 = [
    {
      value: 10,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 40,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 45,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 60,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 30,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 95,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 25,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 15,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
  ];



  const getCurrentDate = () => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year,.
    var today = (month < 10 ? '0' + month : month) + '-' + year;
    // console.log('today month', month);
    setDateSelected(today);

    var objTime = {
      date: date,
      month: month,
      year: year,
    };
    getMonthChartData(objTime);
    // funGetHistoryToday(today);
  };

  const getMonthChartData = async objTime => {
    setisLoading(true);
    let obj = {
      plant: plant,
      token: Data,
      Time: objTime,
    };
    try {
      dispatch(Services.getChartMonthly(obj)).then(data => {
        //  console.log(JSON.stringify(data.payload.pieData ), 'from stats');
        //   const a = JSON.parse(message.payloadString);
        if (data.payload.message) {
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
            let objPD1 = {};
            if (key === 'grid') {
              objPD1 = {
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

          let itemMixFS = [];
          data?.payload?.fuel_save?.litters?.forEach(function (item, index) {
            let properties = {};
            let properties2 = {};
            data?.payload?.fuel_save?.kwh?.forEach(function (item2, index2) {
              if (item2.label === item.label) {
                //   console.log(item, index);
                properties = {
                  value: Math.floor(item.value),
                  label: item.label,
                  spacing: 5,
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
            itemMixFS.push(properties);
            itemMixFS.push(properties2);
          });
          //   console.log(data?.payload?.kwh, 'kwh');

          let itemGrid = data?.payload?.kwh?.grid.map(item => {
            let properties = {
              value: Math.floor(item.value) || 0,
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
              spacing: 30,
              labelWidth: 30,
              frontColor: colors.fet1,
            };
            return properties;
          });
          let itemGen = data?.payload?.kwh?.gen.map(item => {
            let properties = {
              value: Math.floor(item.value) || 0,
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
              spacing: 30,
              labelWidth: 30,
              frontColor: colors.fet3,
            };
            return properties;
          });
          let itemSolar = data?.payload?.kwh?.solar.map(item => {
            let properties = {
              value: Math.floor(item.value) || 0,
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
              spacing: 30,
              labelWidth: 30,
              frontColor: colors.fet2,
            };
            return properties;
          });
          let itemLoad = data?.payload?.kwh?.load.map(item => {
            let properties = {
              value: Math.floor(item.value) || 0,
              label: item.label,
              labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
              spacing: 30,
              labelWidth: 30,
              frontColor: colors.fetBlue,
            };
            return properties;
          });
          setbarDataRed(itemGrid);
          setbarDataYellow(itemGen);
          setbarDataGreen(itemSolar);
          setbarDataBlue(itemLoad);

          //--------grgen
          let itemMixGRGEN = [];
          let propertiesGR = {};
          let propertiesGE = {};

          itemGrid.forEach(function (item, index) {
            itemGen.forEach(function (item2, index2) {
              if (item.label === item.label && item2.label === item.label) {
                propertiesGR = {
                  value: Math.floor(item.value) || 0,
                  label: item.label,
                  spacing: 20,
                  labelWidth: 10,
                  labelTextStyle: {
                    color: colors.fetGray,
                    fontSize: rfSpacing.m,
                  },
                  frontColor: colors.fet1,
                };
                propertiesGE = {
                  value: Math.floor(item2.value) || 0,
                  frontColor: colors.fet3,
                };
              }
            });
            itemMixGRGEN.push(propertiesGR);
            itemMixGRGEN.push(propertiesGE);

            // itemMix.push(properties);
            // itemMix.push(properties2);
            // itemMix.push(properties3);
            // itemMix.push(properties4);
          });
          var newArrayGRGE = itemMixGRGEN.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix4GRGE(newArrayGRGE);
          //-------------

          //-------- grsol
          let itemMixGRSO = [];
          let propertiesGR2 = {};
          let propertiesSO = {};

          itemGrid.forEach(function (item, index) {
            itemSolar.forEach(function (item2, index2) {
              if (item.label === item.label && item2.label === item.label) {
                propertiesGR2 = {
                  value: Math.floor(item.value) || 0,
                  label: item.label,
                  spacing: 20,
                  labelWidth: 10,
                  labelTextStyle: {
                    color: colors.fetGray,
                    fontSize: rfSpacing.m,
                  },
                  frontColor: colors.fet1,
                };
                propertiesSO = {
                  value: Math.floor(item2.value) || 0,
                  frontColor: colors.fet2,
                };
              }
            });
            itemMixGRSO.push(propertiesGR2);
            itemMixGRSO.push(propertiesSO);
          });
          var newArrayGRSO = itemMixGRSO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix4GRSO(newArrayGRSO);
          //-------------

          //-------- grLoad
          let itemMixGRLO = [];
          let propertiesGR3 = {};
          let propertiesLO = {};

          itemGrid.forEach(function (item, index) {
            itemLoad.forEach(function (item2, index2) {
              if (item.label === item.label && item2.label === item.label) {
                propertiesGR3 = {
                  value: Math.floor(item.value) || 0,
                  label: item.label,
                  spacing: 20,
                  labelWidth: 10,
                  labelTextStyle: {
                    color: colors.fetGray,
                    fontSize: rfSpacing.m,
                  },
                  frontColor: colors.fet1,
                };
                propertiesLO = {
                  value: Math.floor(item2.value) || 0,
                  frontColor: colors.fetBlue,
                };
              }
            });
            itemMixGRLO.push(propertiesGR3);
            itemMixGRLO.push(propertiesLO);
          });
          var newArrayGRLO = itemMixGRLO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix4GRLO(newArrayGRLO);
          //-------------

          //-------- geSol
          let itemMixGESO = [];
          let propertiesGEN = {};
          let propertiesSOL = {};

          itemGen.forEach(function (item, index) {
            itemSolar.forEach(function (item2, index2) {
              if (item.label === item.label && item2.label === item.label) {
                propertiesGEN = {
                  value: Math.floor(item.value) || 0,
                  label: item.label,
                  spacing: 20,
                  labelWidth: 10,
                  labelTextStyle: {
                    color: colors.fetGray,
                    fontSize: rfSpacing.m,
                  },
                  frontColor: colors.fet3,
                };
                propertiesSOL = {
                  value: Math.floor(item2.value) || 0,
                  frontColor: colors.fet2,
                };
              }
            });
            itemMixGESO.push(propertiesGEN);
            itemMixGESO.push(propertiesSOL);
          });
          var newArrayGESO = itemMixGESO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix4GESO(newArrayGESO);
          //-------------

          //-------- geLoad
          let itemMixGELO = [];
          let propertiesGEN2 = {};
          let propertiesLO2 = {};

          itemGen.forEach(function (item, index) {
            itemLoad.forEach(function (item2, index2) {
              if (item.label === item.label && item2.label === item.label) {
                propertiesGEN2 = {
                  value: Math.floor(item.value) || 0,
                  label: item.label,
                  spacing: 20,
                  labelWidth: 10,
                  labelTextStyle: {
                    color: colors.fetGray,
                    fontSize: rfSpacing.m,
                  },
                  frontColor: colors.fet3,
                };
                propertiesLO2 = {
                  value: Math.floor(item2.value) || 0,
                  frontColor: colors.fetBlue,
                };
              }
            });
            itemMixGELO.push(propertiesGEN2);
            itemMixGELO.push(propertiesLO2);
          });
          var newArrayGELO = itemMixGELO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix4GELO(newArrayGELO);
          //-------------

          //-------- SOLoad
          let itemMixSOLO = [];
          let propertiesSO2 = {};
          let propertiesLO3 = {};

          itemSolar.forEach(function (item, index) {
            itemLoad.forEach(function (item2, index2) {
              if (item.label === item.label && item2.label === item.label) {
                propertiesSO2 = {
                  value: Math.floor(item.value) || 0,
                  label: item.label,
                  spacing: 20,
                  labelWidth: 10,
                  labelTextStyle: {
                    color: colors.fetGray,
                    fontSize: rfSpacing.m,
                  },
                  frontColor: colors.fet2,
                };
                propertiesLO3 = {
                  value: Math.floor(item2.value) || 0,
                  frontColor: colors.fetBlue,
                };
              }
            });
            itemMixSOLO.push(propertiesSO2);
            itemMixSOLO.push(propertiesLO3);
          });
          var newArraySOLO = itemMixSOLO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix4SOLO(newArraySOLO);
          //-------------

          //-------GRGESO
          let itemMixGRGESO = [];
          let propertiesGR4 = {};
          let propertiesGEN3 = {};
          let propertiesSO3 = {};

          itemGrid.forEach(function (item, index) {
            itemSolar.forEach(function (item2, index2) {
              itemGen.forEach(function (item3, index2) {
                if (
                  item.label === item.label &&
                  item2.label === item.label &&
                  item3.label === item.label
                ) {
                  propertiesGR4 = {
                    value: Math.floor(item.value) || 0,
                    label: item.label,
                    spacing: 20,
                    labelWidth: 10,
                    labelTextStyle: {
                      color: colors.fetGray,
                      fontSize: rfSpacing.m,
                    },
                    frontColor: colors.fet1,
                  };
                  propertiesSO3 = {
                    value: Math.floor(item2.value) || 0,
                    frontColor: colors.fet2,
                  };
                  propertiesGEN3 = {
                    value: Math.floor(item3.value) || 0,
                    frontColor: colors.fet3,
                  };
                }
              });
            });
            itemMixGRGESO.push(propertiesGR4);
            itemMixGRGESO.push(propertiesSO3);
            itemMixGRGESO.push(propertiesGEN3);
          });
          var newArrayGRGESO = itemMixGRGESO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMixGRGESO(newArrayGRGESO);
          //--------

          //-------GRGELO
          let itemMixGRGELO = [];
          let propertiesGR5 = {};
          let propertiesGEN4 = {};
          let propertiesLO4 = {};

          itemGrid.forEach(function (item, index) {
            itemLoad.forEach(function (item2, index2) {
              itemGen.forEach(function (item3, index2) {
                if (
                  item.label === item.label &&
                  item2.label === item.label &&
                  item3.label === item.label
                ) {
                  propertiesGR5 = {
                    value: Math.floor(item.value) || 0,
                    label: item.label,
                    spacing: 20,
                    labelWidth: 10,
                    labelTextStyle: {
                      color: colors.fetGray,
                      fontSize: rfSpacing.m,
                    },
                    frontColor: colors.fet1,
                  };
                  propertiesLO4 = {
                    value: Math.floor(item2.value) || 0,
                    frontColor: colors.fetBlue,
                  };
                  propertiesGEN4 = {
                    value: Math.floor(item3.value) || 0,
                    frontColor: colors.fet3,
                  };
                }
              });
            });
            itemMixGRGELO.push(propertiesGR5);
            itemMixGRGELO.push(propertiesLO4);
            itemMixGRGELO.push(propertiesGEN4);
          });
          var newArrayGRGELO = itemMixGRGELO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMixGRGELO(newArrayGRGELO);
          //--------

          //-------GRSOLO
          let itemMixGRSOLO = [];
          let propertiesGR6 = {};
          let propertiesSO4 = {};
          let propertiesLO5 = {};

          itemGrid.forEach(function (item, index) {
            itemLoad.forEach(function (item2, index2) {
              itemSolar.forEach(function (item3, index2) {
                if (
                  item.label === item.label &&
                  item2.label === item.label &&
                  item3.label === item.label
                ) {
                  propertiesGR6 = {
                    value: Math.floor(item.value) || 0,
                    label: item.label,
                    spacing: 20,
                    labelWidth: 10,
                    labelTextStyle: {
                      color: colors.fetGray,
                      fontSize: rfSpacing.m,
                    },
                    frontColor: colors.fet1,
                  };
                  propertiesLO5 = {
                    value: Math.floor(item2.value) || 0,
                    frontColor: colors.fetBlue,
                  };
                  propertiesSO4 = {
                    value: Math.floor(item3.value) || 0,
                    frontColor: colors.fet2,
                  };
                }
              });
            });
            itemMixGRSOLO.push(propertiesGR6);
            itemMixGRSOLO.push(propertiesLO5);
            itemMixGRSOLO.push(propertiesSO4);
          });
          var newArrayGRSOLO = itemMixGRSOLO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMixGRSOLO(newArrayGRSOLO);
          //--------

          //-------GESOLO
          let itemMixGESOLO = [];
          let propertiesGEN5 = {};
          let propertiesSO5 = {};
          let propertiesLO6 = {};

          itemGen.forEach(function (item, index) {
            itemLoad.forEach(function (item2, index2) {
              itemSolar.forEach(function (item3, index2) {
                if (
                  item.label === item.label &&
                  item2.label === item.label &&
                  item3.label === item.label
                ) {
                  propertiesGEN5 = {
                    value: Math.floor(item.value) || 0,
                    label: item.label,
                    spacing: 20,
                    labelWidth: 5,
                    labelTextStyle: {
                      color: colors.fetGray,
                      fontSize: rfSpacing.m,
                    },
                    frontColor: colors.fet3,
                  };
                  propertiesLO6 = {
                    value: Math.floor(item2.value) || 0,
                    frontColor: colors.fetBlue,
                  };
                  propertiesSO5 = {
                    value: Math.floor(item3.value) || 0,
                    frontColor: colors.fet2,
                  };
                }
              });
            });
            itemMixGESOLO.push(propertiesGEN5);
            itemMixGESOLO.push(propertiesLO6);
            itemMixGESOLO.push(propertiesSO5);
          });
          var newArrayGESOLO = itemMixGESOLO.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMixGESOLO(newArrayGESOLO);
          //--------

          let itemMix = [];
          let properties = {};
          let properties2 = {};
          let properties3 = {};
          let properties4 = {};

          itemGrid.forEach(function (item, index) {
            itemSolar.forEach(function (item2, index2) {
              itemGen.forEach(function (item3, index2) {
                itemLoad.forEach(function (item4, index2) {
                  if (
                    item.label === item.label &&
                    item2.label === item.label &&
                    item3.label === item.label &&
                    item4.label === item.label
                  ) {
                    properties = {
                      value: Math.floor(item.value) || 0,
                      label: item.label,
                      spacing: 1,
                      labelWidth: 30,
                      labelTextStyle: {
                        color: colors.fetGray,
                        fontSize: rfSpacing.m,
                      },
                      frontColor: colors.fet1,
                    };
                    properties2 = {
                      value: Math.floor(item2.value) || 0,
                      frontColor: colors.fet2,
                      spacing: 0,
                    };
                    properties3 = {
                      value: Math.floor(item3.value) || 0,
                      frontColor: colors.fet3,
                      spacing: 0,
                    };
                    properties4 = {
                      value: Math.floor(item4.value) || 0,
                      frontColor: colors.fetBlue,
                      spacing: 10,
                    };
                  }
                });
              });
            });
            itemMix.push(properties);
            itemMix.push(properties2);
            itemMix.push(properties3);
            itemMix.push(properties4);

            // itemMix.push(properties);
            // itemMix.push(properties2);
            // itemMix.push(properties3);
            // itemMix.push(properties4);
          });
          var newArray = itemMix.filter(
            value => Object.keys(value).length !== 0,
          );
          setbarDataMix(newArray);

          //    console.log(itemFSL.length, '-----> itemFSL ');
          //    console.log(itemFSKW.length, '-----> itemFSKW ');
          //    console.log(itemMixFS.length, '-----> itemMixFS ');
          //   console.log(arrayPD.length, '-----> arrayPD ');
          //   const slicedArray = itemSolar.slice(0, 30);

          setFSL(itemFSL);
          setFSKW(itemFSKW);
          setFSMIX(itemMixFS);
          setFSReveue(data?.payload?.fuel_save?.revenue);

          setpieData(arrayPD);
          setpieDataB(data?.payload?.pieData);
          setenvoirment(data?.payload?.invironmental_benefits);
          //   getMonthChartDataBar(date);
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

  const getMonthChartDataBar = async date => {
    setisLoading(true);
    let obj = {
      plant: plant,
      token: Data,
      date: date,
    };
    try {
      dispatch(Services.getBarChartMonthly(obj)).then(data => {
        //    console.log(JSON.stringify(data?.payload), 'from stats moth');

        let itemGrid = data?.payload?.kwh?.grid.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            spacing: 30,
            labelWidth: 30,
            frontColor: colors.fet1,
          };
          return properties;
        });
        let itemGen = data?.payload?.kwh?.gen.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            spacing: 30,
            labelWidth: 30,
            frontColor: colors.fet3,
          };
          return properties;
        });
        let itemSolar = data?.payload?.kwh?.solar.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            spacing: 30,
            labelWidth: 30,
            frontColor: colors.fet2,
          };
          return properties;
        });
        let itemLoad = data?.payload?.kwh?.load.map(item => {
          let properties = {
            value: item.value,
            label: item.label,
            labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m }, //'',
            spacing: 30,
            labelWidth: 30,
            frontColor: colors.fetBlue,
          };
          return properties;
        });

        let itemMix = [];
        let properties = {};
        let properties2 = {};
        let properties3 = {};
        let properties4 = {};
        itemGrid.forEach(function (item, index) {
          itemSolar.forEach(function (item2, index2) {
            itemGen.forEach(function (item3, index2) {
              itemLoad.forEach(function (item4, index2) {
                if (
                  item2.label === item.label &&
                  item3.label === item.label &&
                  item4.label === item.label
                ) {
                  properties = {
                    value: Math.floor(item.value),
                    label: item.label,
                    spacing: 0,
                    labelWidth: 30,
                    labelTextStyle: {
                      color: colors.fetGray,
                      fontSize: rfSpacing.m,
                    },
                    frontColor: colors.fet2,
                  };
                  properties2 = {
                    value: Math.floor(item2.value),
                    frontColor: colors.fet3,
                    spacing: 0,
                  };
                  properties3 = {
                    value: Math.floor(item3.value),
                    frontColor: colors.fetBlue,
                    spacing: 0,
                  };
                  properties4 = {
                    value: Math.floor(item4.value),
                    frontColor: colors.fet1,
                    spacing: 10,
                  };
                }
              });
            });
          });
          itemMix.push(properties);
          itemMix.push(properties2);
          itemMix.push(properties3);
          itemMix.push(properties4);

          // itemMix.push(properties);
          // itemMix.push(properties2);
          // itemMix.push(properties3);
          // itemMix.push(properties4);
        });
        //  setbarDataMix(itemMix);

        // console.log(itemMix.length, '-----> itemMix month ');
        // console.log(itemGrid.length, '-----> itemGrid month ');
        // console.log(itemGen.length, '-----> itemGen  month');
        // console.log(itemSolar.length, '-----> itemSolar month');
        // console.log(itemLoad.length, '-----> itemSolar month');

        var newArray = itemMix.filter(value => Object.keys(value).length !== 0);

        //   console.log(newArray, '-----> newArray ');

        const sliceditemMix = newArray.slice(0, 50);
        const sliceditemGrid = itemGrid.slice(0, 30);
        const sliceditemGen = itemGen.slice(0, 30);
        const sliceditemSolar = itemSolar.slice(0, 30);
        const sliceditemLoad = itemLoad.slice(0, 30);

        setbarDataRed(sliceditemGrid);
        setbarDataYellow(sliceditemGen);
        setbarDataGreen(sliceditemSolar);
        setbarDataBlue(sliceditemLoad);
        setbarDataMix(newArray);

        setisLoading(false);
      });
    } catch (err) {
      ShowToast('error', 'No records.');
      setisLoading(false);
    } finally {
      //  setisLoading(false);
    }
  };

  useEffect(() => {
    getCurrentDate();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      {/* Time Card */}
      {/* <TimeCard
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}

      {/* <SafeAreaView>
        <Text>Month Year Picker Example</Text>
        <Text>{moment(date, "MM-YYYY")}</Text>
        <TouchableOpacity onPress={() => showPicker(true)}>
          <Text>OPEN</Text>
        </TouchableOpacity>
        {show && (
          <MonthPicker
            onChange={onValueChange}
            value={date}
            minimumDate={new Date()}
            maximumDate={new Date(2025, 5)}
            locale="ko"
          />
        )}
      </SafeAreaView> */}

      <View style={styles.timeDiv}>
        <Pressable
          onPress={() => showPicker(true)}
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
        {show && (
          <MonthPicker
            onChange={onValueChange}
            value={date}
          //  minimumDate={new Date()}
          //  maximumDate={new Date(2025, 5)}
          //   locale="ko"
          />
        )}
      </View>
      {/* CIrcular Chart */}
      <CircularChart circleData={circleData} energyMan={energyMan} />

      {/* Pie Chart */}
      <PieChartDiv type={'Month'} pieDataB={pieDataB} pieData={pieData} />

      {/* Bar Chart */}
      <BarChart4LinesDiv
        barDataRed={barDataRed}
        barDataMix4={barDataMix}
        barDataGreen={barDataGreen}
        barDataBlue={barDataBlue}
        barDataYellow={barDataYellow}
        //--------2
        DataMixGRGE={barDataMix4GRGE}
        DataMixGRSO={barDataMix4GRSO}
        DataMixGRLO={barDataMix4GRLO}
        DataMixGESO={barDataMix4GESO}
        DataMixGELO={barDataMix4GELO}
        DataMixSOLO={barDataMix4SOLO}
        //---------3
        DataMixGRGESO={barDataMixGRGESO}
        DataMixGRGELO={barDataMixGRGELO}
        DataMixGRSOLO={barDataMixGRSOLO}
        DataMixGESOLO={barDataMixGESOLO}
      />

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
