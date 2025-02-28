import React, {useState} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import colors from '../../../../theme/colors';
import style from '../styles';
import rfSpacing from '../../../../theme/rfSpacing';

import {BarChart} from 'react-native-gifted-charts';

const BarChart4Load = ({barDataMix, barDataGreen,KHead, barDataYellow}) => {
  const [BarKwh, setBarKwh] = useState(true);
  const [BarLitter, setBarLitter] = useState(true);

  return (
    <View style={style.pDiv}>
      <Text
        style={{
          color: colors.fetBlack,
          //  paddingTop: rfSpacing['5xl'],
          paddingLeft: rfSpacing.l,
          fontSize: rfSpacing.xl,
          fontWeight: 'bold',
        }}>
        KWh Consumption
      </Text>
      <Text
        style={{
          color: colors.fetGray,
          paddingTop: rfSpacing.l,
          paddingLeft: rfSpacing.l,
          fontSize: rfSpacing.l,
          fontWeight: 'bold',
        }}>
        KWh Today {KHead?.Kwh_today}
      </Text>
      <Text
        style={{
          color: colors.fetGray,
          //  paddingTop: rfSpacing['5xl'],
          paddingLeft: rfSpacing.l,
          fontSize: rfSpacing.l,
          fontWeight: 'bold',
        }}>
        Litters Today {KHead?.litters_today}
      </Text>

      {/* <ReactNativeZoomableView
        maxZoom={1.5}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
      > */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: rfSpacing.xxl,
          }}>
          <BarChart
            //    data={BarKwh ? barDataGreen :  barDataYellow}
            data={
              BarKwh === true && BarLitter === false
                ? barDataGreen
                : BarLitter === true && BarKwh == false
                ? barDataYellow
                : barDataMix
            }
            barWidth={6}
            spacing={20}
            roundedTop
            //   roundedBottom
            hideRules
            //     xAxisThickness={0}
            //  yAxisThickness={0}
            yAxisTextStyle={{color: colors.fetGray, fontSize: rfSpacing.m}}
            //    noOfSections={3}
            //     maxValue={75}
          />
        </View>
      {/* </ReactNativeZoomableView> */}
      <View
        style={{
          flexDirection: 'row',
          gap: rfSpacing.l,
          paddingHorizontal: rfSpacing.l,
        }}>
        <Pressable
          onPress={() => setBarKwh(!BarKwh)}
          style={BarKwh == true ? style.activeDiv : style.inActiveDiv}>
          <Text
            style={{
              color: colors.fetGray,
              fontSize: rfSpacing.l,
              padding: rfSpacing.xs,
            }}>
            KWh Import
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setBarLitter(!BarLitter)}
          style={BarLitter === true ? style.activeDiv : style.inActiveDiv}>
          <Text
            style={{
              color: colors.fetGray,
              fontSize: rfSpacing.l,
              padding: rfSpacing.xs,
            }}>
            KWh Export
          </Text>
        </Pressable>
        <Pressable
          //     onPress={() => callFun()}
          style={
            BarLitter === true && BarKwh === true
              ? style.activeDiv2
              : BarKwh === false && BarLitter === false
              ? style.activeDiv2
              : style.inActiveDiv2
          }>
          <Text
            style={{
              color: colors.fetGray,
              fontSize: rfSpacing.l,
              padding: rfSpacing.xs,
            }}>
            Both
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BarChart4Load;
