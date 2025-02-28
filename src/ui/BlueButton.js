import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';

const BlueButton = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonBgStyle}>
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBgStyle: {
    backgroundColor: colors.fetGreen,
    width: scale(320),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: rfSpacing.m,
  },
  buttonTextStyle: {
    fontSize: rfSpacing.xl,
    fontWeight: '900',
    color: colors.white,
  },
});

export default BlueButton;
