import React, {useState, useEffect} from 'react';
import {Text, Image, View, Pressable, StyleSheet} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../../../theme/colors';
import style from '../styles';
import rfSpacing from '../../../../theme/rfSpacing';

import {LineChart, PieChart} from 'react-native-gifted-charts';
import TimeCard from '../../../../ui/TimePicker';
import down from '../../../../assets/_PlantDetail/down.png';

const TimeBar = ({
  lineData,
  fun1,
  fun2,
  fun3,
  fun4,
  DateSelected,
  setDateSelected,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
    console.log('today', today);
    fun1(today);
    fun2(today);
    setDateSelected(today);

    // setfromDate(today);
    hideDatePicker();
  };

  useEffect(() => {
    // getCurrentDate();
  }, []);

  return (
    <>
      <TimeCard
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={style.timeDiv}>
        <Pressable onPress={() => showDatePicker()} style={style.fRow}>
          <View style={style.end2}>
            <Text style={style.dateText}>{DateSelected}</Text>
          </View>
          <View style={style.dateIcon}>
            <Image source={down} style={style.dateIconSize} />
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default React.memo(TimeBar);
