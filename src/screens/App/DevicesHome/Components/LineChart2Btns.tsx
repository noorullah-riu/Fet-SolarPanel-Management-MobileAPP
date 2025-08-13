import React, { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import colors from '../../../../theme/colors';
import style from '../styles';
import rfSpacing from '../../../../theme/rfSpacing';

import { LineChart, PieChart } from 'react-native-gifted-charts';

const LineChart2Btns = ({ LoadMax, lineData, lineData2, toggleModalInDC }) => {
  const [GridStatus, setGridStatus] = useState(true);
  const [SolarStatus, setSolarStatus] = useState(false);

  const callFun = () => {
    // setBarLitter(!BarLitter);
    // setBarKwh(!BarKwh);
    setGridStatus(!GridStatus);
    if (GridStatus) {
      setSolarStatus(true);
    }
  };
  const callFun2 = () => {
    // setBarLitter(!BarLitter);
    // setBarKwh(!BarKwh);
    setSolarStatus(!SolarStatus);
    if (SolarStatus) {
      setGridStatus(true);
    }
  };

  const pointerLabelComponent = (items) => {
    return (
      <View
        style={{
          height: 90,
          width: 100,
          justifyContent: 'center',
          marginTop: 'auto',
          // marginLeft: 40,
        }}>
        <Text style={style.LCPointerTextGray}>
          {items[0].label || 'N/A'}
        </Text>
        {GridStatus ? (
          <View style={style.LCLabelTxtWrap}>
            <Text style={style.LCPointerTextRed}>
              {items[0]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}

        {SolarStatus ? (
          <View style={style.LCLabelTxtWrap}>
            <Text style={style.LCPointerTextGreen}>
              {items[1]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  }
  const dataDefault = [
    {
      value: 0,
      label: '00:00',
      labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
    },
  ];
  return (
    <>
      {/* Line Chart */}
      <View style={style.pDiv}>
        {/* <Text style={style.LCHeader}></Text> */}

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={style.CCTextY}>IV Curve </Text>
          </View>
          <Pressable
            onPress={toggleModalInDC}
            //   onPress={() => navigation.navigate("FullLineChart")} //
            style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
            <Text style={style.CCTextD}>Full Screen</Text>
          </Pressable>
        </View>

        <View style={style.LCWraper}>
          <LineChart
            //  areaChart
            //   isAnimated={true}
            maxValue={LoadMax}
            curved
            thickness={0.5}
            noOfSections={5}
            showFractionalValues
            //  maxValue={600}
            data={GridStatus === true ? lineData : dataDefault}
            data2={SolarStatus === true ? lineData2 : dataDefault}
            height={150}
            //    showVerticalLines
            //    showHorizontaLines="true"
            //  spacing={Dimensions.get('window').width-10}
            yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
            initialSpacing={15}
            yAxisColor="#aaa"
            xAxisColor="#aaa"
            color1="#00b33c"
            color2="#ffcc00"
            color3="#9fbbf4"
            color4="#cc0000"
            textColor1="green"
            hideDataPoints
            //     dataPointsColor1="blue"
            //    dataPointsColor2="red"
            startFillColor1="#00b33c"
            startFillColor2="#ffcc00"
            startFillColor3="#9fbbf4"
            startFillColor4="#cc0000"
            //     hideRules
            startOpacity={0.4}
            endOpacity={0.1}



            pointerConfig={{
              //   onPointersChange:{() => console.log("focused")}
              //    onPointersChange: (point) => console.log(point),

              //   activatePointersOnLongPress: true,
              activatePointersOnLongPress: false,
              autoAdjustPointerLabelPosition: true,
              //      activatePointersDelay: 0,
              strokeDashArray: [2, 5],
              radius: 2,
              persistPointer: true,
              pointerVanishDelay: 1000000,
              pointerStripColor: 'black',
              pointerStripWidth: 2,
              pointerColor: 'red',
              pointerStripUptoDataPoint: true,
              activatePointersDelay: 150,
              pointerLabelComponent: pointerLabelComponent,


            }}
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
            onPress={() => callFun()}
            style={GridStatus === true ? style.activeDiv : style.inActiveDiv}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: colors.fet2,
                    width: rfSpacing.s,
                    height: rfSpacing.s,
                    borderRadius: rfSpacing.xs,
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                  }}></View>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  paddingLeft: rfSpacing.xs,
                }}>
                <Text
                  style={{
                    color: colors.fetGray,
                    fontSize: rfSpacing.l,
                  }}>
                  Dc - I
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFun2()}
            style={SolarStatus === true ? style.activeDiv : style.inActiveDiv}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: colors.fet3,
                    width: rfSpacing.s,
                    height: rfSpacing.s,
                    borderRadius: rfSpacing.xs,
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                  }}></View>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'center',
                  paddingLeft: rfSpacing.xs,
                }}>
                <Text
                  style={{
                    color: colors.fetGray,
                    fontSize: rfSpacing.l,
                  }}>
                  {/* Solar */}Dc - V
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LineChart2Btns;
