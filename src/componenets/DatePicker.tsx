import React, {useState} from 'react';
import {StyleSheet, View, Text, Platform, Pressable} from 'react-native';
import colors from '../theme/colors';
import DateTimePicker from '@react-native-community/datetimepicker';
import rfSpacing from '../theme/rfSpacing';

const DatePicker = ({title,date,setDate}) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const display = () => {
    if (Date == null) {
      return <Text>{title}</Text>;
    } else if (isPickerShow == false) {
      return <Text>{date.toLocaleDateString()}</Text>;
    } else if (isPickerShow == true) {
      return <Text>{date.toLocaleDateString()}</Text>;
    }
  };

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    if (Platform.OS === 'android') {
      setIsPickerShow(false);
    }
  };
  return (
    <View>
      <View style={styles.pickedDateContainer}>
        <Pressable onPress={showPicker} style={styles.dateDiv}>
          <Text style={styles.txtDate}>{display()}</Text>
        </Pressable>
      </View>

      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={onChange}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pickedDateContainer: {
    flexDirection: 'row',
  },

  datePicker: {
    width: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dateDiv: {
    height: rfSpacing['7xl'],
    width: '90%',

    borderRadius: rfSpacing.m,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },

  txtDate: {
    color: colors.grey,
    textAlign: 'center',
  },
});

export default DatePicker;
