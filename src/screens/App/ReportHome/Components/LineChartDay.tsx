import React, { useState } from 'react';
import { Text, Dimensions, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import styles from '../style';
import colors from '../../../../theme/colors';
import rfSpacing from '../../../../theme/rfSpacing';
const screenWidth = Dimensions.get('window').width;

const LineChartDay = ({ LoadMax, isPointerActive, setIsPointerActive, GridStatus, SolarStatus, GenStatus, LoadStatus, lineData, lineData2, lineData3, lineData4 }: any) => {
    console.log("chart rendering --------------->");

    const activeData = GridStatus ? lineData : SolarStatus ? lineData2 : GenStatus ? lineData3 : lineData4;
    const numberOfDataPoints = activeData.length;

    // Calculate the width so that all data points fit within the screen
    const calculatedWidth = Math.max(screenWidth, numberOfDataPoints * (screenWidth / numberOfDataPoints));


    const dataDefault = [
        {
            value: 0,
            label: '00:00',
            labelTextStyle: { color: colors.fetGray, fontSize: rfSpacing.m },
        },
    ];


    const handlePointerActivation = (items) => {
        setIsPointerActive(true);
        // Handle other pointer activation logic
    };

    const handlePointerDeactivation = () => {
        setIsPointerActive(false);
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
                <Text style={styles.LCPointerTextGray}>
                    {items[0].label || 'N/A'}
                </Text>
                {GridStatus ? (
                    <View style={styles.LCLabelTxtWrap}>
                        <Text style={styles.LCPointerTextRed}>
                            {items[0]?.value}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}

                {SolarStatus ? (
                    <View style={styles.LCLabelTxtWrap}>
                        <Text style={styles.LCPointerTextGreen}>
                            {items[1]?.value}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}
                {GenStatus ? (
                    <View style={styles.LCLabelTxtWrap}>
                        <Text style={styles.LCPointerTextYellow}>
                            {items[2]?.value}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}
                {LoadStatus ? (
                    <View style={styles.LCLabelTxtWrap}>
                        <Text style={styles.LCPointerTextBlue}>
                            {items[3]?.value}
                        </Text>
                    </View>
                ) : (
                    <></>
                )}
            </View>
        );
    }
    return (
        <>
            <View style={styles.LCWraper}>
                <LineChart
                    areaChart
                    //     isAnimated={true}
                    curved
                    thickness={0.5}
                    //   hideDataPoints={true}
                    //       noOfSections={10}
                    maxValue={LoadMax}
                    data={
                        GridStatus
                            ? lineData
                            : SolarStatus
                                ? lineData2
                                : GenStatus
                                    ? lineData3
                                    : lineData4
                    }
                    data2={SolarStatus === true ? lineData2 : dataDefault}
                    data3={GenStatus === true ? lineData3 : dataDefault}
                    data4={LoadStatus === true ? lineData4 : dataDefault}
                    height={150}
                    width={calculatedWidth}
                    //   width={screenWidth} // Adjust width dynamically
                    //   width={screenWidth}
                    //   dataPointsSpacing={1}
                    //   initialSpacing={adjustedSpacing}
                    yAxisTextStyle={{ color: colors.fetGray, fontSize: rfSpacing.m }}
                    //    initialSpacing={5}
                    yAxisColor="#aaa"
                    xAxisColor="#aaa"
                    color1="#cc0000"
                    color2="#00b33c"
                    color3="#ffcc00"
                    color4="#9fbbf4"
                    textColor1="green"
                    hideDataPoints
                    initialSpacing={0} // Set dynamic spacing
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
                    //   rulesType={ruleTypes.SOLID}
                    rulesColor="gray"
                    //    onPointerActivate={handlePointerActivation}
                    //   onPointerDeactivate={handlePointerDeactivation}
                    //   onPointersChange={() => console.log("focused")}
                    //    showDataPointOnFocus={true}
                    //   focusEnabled={true}
                    //   showStripOnFocus ={true}
                    //    showTextOnFocus ={true}
                    //  onPointerDeactivate={handlePointerDeactivation}
                 //   onPress={(index) => console.log(index)}

                    pointerConfig={{
                        //   onPointersChange:{() => console.log("focused")}
                        //    onPointersChange: (point) => console.log(point),

                     //   activatePointersOnLongPress: true,
                        //   activatePointersOnLongPress: false,
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

                        // Your existing pointerConfig
                        // pointerLabelComponent: (props) => (
                        //     <PointerLabelComponent
                        //         items={props?.items}
                        //     />
                        // ),


                        // pointerLabelComponent: items => {
                        //     return (
                        //         <View
                        //             style={{
                        //                 height: 120,
                        //                 width: 100,
                        //                 backgroundColor: '#282C3E',
                        //                 borderRadius: 4,
                        //                 justifyContent: 'center',
                        //                 paddingLeft: 16,
                        //             }}>
                        //             <Text style={{ color: 'lightgray', fontSize: 12 }}>{2018}</Text>
                        //             <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[0].value}</Text>
                        //             <Text style={{ color: 'lightgray', fontSize: 12, marginTop: 12 }}>{2019}</Text>
                        //             <Text style={{ color: 'white', fontWeight: 'bold' }}>{items[1].value}</Text>
                        //         </View>
                        //     );

                        // },

                    }}
                />
            </View>
        </>
    );
};

export default React.memo(LineChartDay);
