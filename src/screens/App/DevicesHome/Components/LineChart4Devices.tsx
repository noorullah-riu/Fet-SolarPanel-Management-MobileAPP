import React, { useState } from 'react';
import { Text, View, Dimensions, Pressable, StyleSheet } from 'react-native';
import colors from '../../../../theme/colors';
import style from '../styles';
import rfSpacing from '../../../../theme/rfSpacing';
import { ruleTypes } from 'gifted-charts-core';
import { LineChart } from 'react-native-gifted-charts';
const screenWidth = Dimensions.get('window').width;

const LineChart4Devices = ({
  lineData,
  lineData2,
  lineData3,
  lineData4,
  LoadMax,
  toggleModalIn
}) => {
  const [GridStatus, setGridStatus] = useState(true);
  const [SolarStatus, setSolarStatus] = useState(false);
  const [GenStatus, setGenStatus] = useState(false);
  const [LoadStatus, setLoadStatus] = useState(false);

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
        {GenStatus ? (
          <View style={style.LCLabelTxtWrap}>
            <Text style={style.LCPointerTextYellow}>
              {items[2]?.value}
            </Text>
          </View>
        ) : (
          <></>
        )}
        {LoadStatus ? (
          <View style={style.LCLabelTxtWrap}>
            <Text style={style.LCPointerTextBlue}>
              {items[3]?.value}
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
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            {/* <Text style={style.CCTextY}>KW </Text> */}
          </View>
          <Pressable
            onPress={toggleModalIn}
            //   onPress={() => navigation.navigate("FullLineChart")} //
            style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
            <Text style={style.CCTextD}>Full Screen</Text>
          </Pressable>
        </View>
        {/* <View style={style.LCWraper}> */}
        <LineChart
          //   areaChart
          //  isAnimated={true}
          //   curved
          thickness={0.5}
          // highlightedRange={{
          //   from: 14,
          //   to: 1,
          //   color: 'green',
          // }}
          //   hideDataPoints={true}
          //       noOfSections={10}
          maxValue={LoadMax}
          //    data={lineData}
          data={
            GridStatus
              ? lineData
              : SolarStatus
                ? lineData2
                : GenStatus
                  ? lineData3
                  : dataDefault
          }
          data2={SolarStatus === true ? lineData2 : dataDefault}
          data3={GenStatus === true ? lineData3 : dataDefault}
          data4={LoadStatus === true ? lineData4 : dataDefault}
          height={150}
          width={screenWidth}
          //    showVerticalLines
          //    showHorizontaLines="true"
          //  spacing={Dimensions.get('window').width-10}

          yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
          initialSpacing={5}


          yAxisColor="#aaa"
          xAxisColor="#aaa"
          color1='#3798FE'
          //'"#cc0000"
          color2='#18CF87'
          // "#00b33c"
          color3='#ec518fff'
          //"#ffcc00"
          color4='#ffcc00'
          //"#9fbbf4"
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

        <View
          style={{
            flexDirection: 'row',
            gap: rfSpacing.l,
            paddingHorizontal: rfSpacing.l,
          }}>
          <Pressable
            onPress={() => callFunGr()}
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
                    backgroundColor: colors.fet1,
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
                  {/* Grid */}KW
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFunSol()}
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
                  {/* Solar */}V
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFunGen()}
            style={GenStatus === true ? style.activeDiv : style.inActiveDiv}>
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
                  flex: 3,
                  justifyContent: 'center',
                  paddingLeft: rfSpacing.xs,
                }}>
                <Text
                  style={{
                    color: colors.fetGray,
                    fontSize: rfSpacing.l,
                  }}>
                  {/* Gen */}I
                </Text>
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => callFunLoad()}
            style={LoadStatus === true ? style.activeDiv : style.inActiveDiv}>
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
                    backgroundColor: colors.fetBlue,
                    width: rfSpacing.s,
                    height: rfSpacing.s,
                    borderRadius: rfSpacing.xs,
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                  }}></View>
              </View>
              <View
                style={{
                  flex: 3,
                  justifyContent: 'center',
                  paddingLeft: rfSpacing.xs,
                }}>
                <Text
                  style={{
                    color: colors.fetGray,
                    fontSize: rfSpacing.l,
                  }}>
                  {/* Load */} Hz
                </Text>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default LineChart4Devices;
