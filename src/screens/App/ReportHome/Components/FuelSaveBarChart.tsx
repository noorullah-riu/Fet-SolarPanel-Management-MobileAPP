import React, { useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from '../style';
import { BarChart } from 'react-native-gifted-charts';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const FuelSaveBarChartDiv = ({
  barDataMix,
  barDataGreen,
  barDataYellow,
  reveue,
}: any) => {
  const [BarKwh, setBarKwh] = useState(true);
  const [BarLitter, setBarLitter] = useState(true);
  const barDataRed1 = [
    {
      value: 0,
      label: '01',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '02',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '03',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '04',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '05',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '06',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '07',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '08',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
  ];
  return (
    <>
      <View style={styles.pDiv}>
        <Text style={styles.CCTextE}>Fuel Save</Text>
        <Text style={styles.CCTextY}>Revenue Total</Text>
        <Text style={styles.CCTextE}>{reveue} litters</Text>
        {/* <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
        > */}

        {BarKwh || BarLitter ? <View style={styles.LCWraper}>
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
            spacing={10}
            roundedTop
            //   roundedBottom
            hideRules
            //     xAxisThickness={0}
            //  yAxisThickness={0}
            yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
            //    noOfSections={3}
            //     maxValue={75}

            renderTooltip={(item, index) => {
              return (
                <View
                  style={{
                    marginBottom: 20,
                    // marginLeft: -6,
                    // backgroundColor: '#ffcefe',
                    // paddingHorizontal: 6,
                    // paddingVertical: 4,
                    // borderRadius: 4,
                  }}>
                  <Text>{item?.value}</Text>
                </View>
              );
            }}
          />
        </View> : <View style={styles.LCWraper}>
          <BarChart
            //    data={BarKwh ? barDataGreen :  barDataYellow}
            data={barDataRed1}
            barWidth={6}
            spacing={10}
            roundedTop
            //   roundedBottom
            hideRules
            //     xAxisThickness={0}
            //  yAxisThickness={0}
            yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
            //    noOfSections={3}
            //     maxValue={75}

            renderTooltip={(item, index) => {
              return (
                <View
                  style={{
                    marginBottom: 20,
                    // marginLeft: -6,
                    // backgroundColor: '#ffcefe',
                    // paddingHorizontal: 6,
                    // paddingVertical: 4,
                    // borderRadius: 4,
                  }}>
                  <Text>{item?.value}</Text>
                </View>
              );
            }}
          />
        </View>}

        {/* </ReactNativeZoomableView> */}
        <View style={styles.BCBtnWraper}>
          <Pressable
            onPress={() => setBarKwh(!BarKwh)}
            style={BarKwh == true ? styles.activeDiv : styles.inActiveDiv}>
            <Text style={styles.BCBtnText}>Kwh</Text>
          </Pressable>
          <Pressable
            onPress={() => setBarLitter(!BarLitter)}
            style={BarLitter === true ? styles.activeDiv : styles.inActiveDiv}>
            <Text style={styles.BCBtnText}>Litter</Text>
          </Pressable>
          {/* <Pressable
            //     onPress={() => callFun()}
            style={
              BarLitter === true && BarKwh === true
                ? styles.activeDiv2
                : BarKwh === false && BarLitter === false
                ? styles.activeDiv2
                : styles.inActiveDiv2
            }>
            <Text style={styles.BCBtnText}>Both</Text>
          </Pressable> */}
        </View>
      </View>
    </>
  );
};

export default FuelSaveBarChartDiv;
