import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import colors from '../theme/colors';
import rfSpacing from '../theme/rfSpacing';
import {WSImages} from './Images';
const DevicesHeader = ({leftCallBack, title}: any) => {
  return (
    <View >
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.imageWraper}>
        <View style={styles.f1}>
          <Pressable onPress={leftCallBack}>
            <Image source={WSImages.arrowB} style={styles.iconSize} />
          </Pressable>
        </View>
        <View style={styles.f4}>
          <Text style={styles.titleTxt}>{title}</Text>
        </View>
        <View style={styles.f1}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    height: rfSpacing['4xl'],
    width: rfSpacing['4xl'],
  },
  imageWraper: {
    marginHorizontal: rfSpacing.l,
    marginTop: rfSpacing.l,
    backgroundColor: colors.fetWhite,
    padding: rfSpacing.xxl,
    flexDirection: 'row',
  },
  titleTxt: {
    fontSize: rfSpacing.xl,
    fontWeight: 'bold',
    color: colors.fetGreen,
  },
  f1: {
    flex: 1,
  },
  f4: {
    flex: 4,
    alignItems: 'center',
  },
});
export default DevicesHeader;
