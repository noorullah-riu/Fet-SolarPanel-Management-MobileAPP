import React, { useState } from 'react';
import { Text, Pressable, View, Alert } from 'react-native';
import styles from '../style';
import { BarChart } from 'react-native-gifted-charts';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

const BarChart4LinesDiv = ({
  barDataMix4,
  barDataGreen,
  barDataBlue,
  barDataRed,
  barDataYellow,
  //-------2
  DataMixGRGE,
  DataMixGRSO,
  DataMixGRLO,
  DataMixGESO,
  DataMixGELO,
  DataMixSOLO,
  //--------3
  DataMixGRGESO,
  DataMixGRGELO,
  DataMixGRSOLO,
  DataMixGESOLO,
}: any) => {
  const [GridStatus, setGridStatus] = useState(true);
  const [SolarStatus, setSolarStatus] = useState(true);
  const [GenStatus, setGenStatus] = useState(true);
  const [LoadStatus, setLoadStatus] = useState(true);

  const barDataRed1 = [
    {
      value: 0,
      label: '00:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '03:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '06:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '09:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '12:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '15:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '18:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
    {
      value: 0,
      label: '21:00',
      spacing: 30,
      labelWidth: 30,
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
      frontColor: colors.fet1,
    },
  ];
  return (
    <>
      {/* <ReactNativeZoomableView
        maxZoom={10}
        minZoom={0.5}
        zoomStep={0.5}
        initialZoom={1}
        bindToBorders={true}
      > */}
      <View style={styles.pDiv}>
        <Text style={styles.CCTextE}>KWh</Text>
        {LoadStatus || GenStatus || SolarStatus || GridStatus ?
          <View style={styles.LCWraper}>
            <BarChart
              //    data={BarKwh ? barDataGreen :  barDataYellow}
              data={
                GridStatus === true &&
                  GenStatus == true &&
                  SolarStatus == true &&
                  LoadStatus == true
                  ? barDataMix4
                  : GridStatus === true &&
                    GenStatus == true &&
                    SolarStatus == true
                    ? DataMixGRGESO
                    : GridStatus === true && GenStatus == true && LoadStatus == true
                      ? DataMixGRGELO
                      : GridStatus === true &&
                        SolarStatus == true &&
                        LoadStatus == true
                        ? DataMixGRSOLO
                        : GenStatus === true &&
                          SolarStatus == true &&
                          LoadStatus == true
                          ? DataMixGESOLO
                          : GridStatus === true && GenStatus == true
                            ? DataMixGRGE
                            : GridStatus === true && SolarStatus == true
                              ? DataMixGRSO
                              : GridStatus === true && LoadStatus == true
                                ? DataMixGRLO
                                : GenStatus === true && SolarStatus == true
                                  ? DataMixGESO
                                  : GenStatus === true && LoadStatus == true
                                    ? DataMixGELO
                                    : SolarStatus === true && LoadStatus == true
                                      ? DataMixSOLO
                                      : GridStatus === true
                                        ? barDataRed
                                        : GenStatus === true
                                          ? barDataYellow
                                          : SolarStatus === true
                                            ? barDataGreen
                                            : LoadStatus === true
                                              ? barDataBlue
                                              : barDataMix4
              }
              barWidth={5}
              spacing={0}
              //   roundedTop
              //   roundedBottom
              hideRules
              //     xAxisThickness={0}
              //  yAxisThickness={0}
              yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
            //    noOfSections={3}
            //     maxValue={75}
            />
          </View> : <View style={styles.LCWraper}>
            <BarChart
              //    data={BarKwh ? barDataGreen :  barDataYellow}
              data={barDataRed1}
              barWidth={5}
              spacing={0}
              //   roundedTop
              //   roundedBottom
              hideRules
              //     xAxisThickness={0}
              //  yAxisThickness={0}
              yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
            //    noOfSections={3}
            //     maxValue={75}
            />
          </View>}

        <View style={styles.BCBtnWraper}>
          <Pressable
            onPress={() => setGridStatus(!GridStatus)}
            style={GridStatus == true ? styles.activeDiv : styles.inActiveDiv}>
            <Text style={styles.BCBtnText}>Grid</Text>
          </Pressable>
          <Pressable
            onPress={() => setGenStatus(!GenStatus)}
            style={GenStatus === true ? styles.activeDiv : styles.inActiveDiv}>
            <Text style={styles.BCBtnText}>Gen</Text>
          </Pressable>
          <Pressable
            onPress={() => setSolarStatus(!SolarStatus)}
            style={
              SolarStatus === true ? styles.activeDiv : styles.inActiveDiv
            }>
            <Text style={styles.BCBtnText}>Solar</Text>
          </Pressable>
          <Pressable
            onPress={() => setLoadStatus(!LoadStatus)}
            style={LoadStatus === true ? styles.activeDiv : styles.inActiveDiv}>
            <Text style={styles.BCBtnText}>Load</Text>
          </Pressable>
          {/* <Pressable
            onPress={() => allBtnPress()}
            style={
              GridStatus === true &&
                GenStatus === true &&
                SolarStatus === true &&
                LoadStatus === true
                ? styles.activeDiv2
                : GridStatus === false &&
                  GenStatus === false &&
                  SolarStatus === false &&
                  LoadStatus === false
                  ? styles.activeDiv2
                  : styles.activenull
            }>
            <Text style={styles.BCBtnText}>All</Text>
          </Pressable> */}
        </View>
      </View>
      {/* </ReactNativeZoomableView> */}
    </>
  );
};

export default BarChart4LinesDiv;
