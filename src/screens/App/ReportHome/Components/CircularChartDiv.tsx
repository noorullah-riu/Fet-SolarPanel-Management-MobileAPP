import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import style from '../style';
import {PieChart} from 'react-native-gifted-charts';
import {twoDecimal} from '../../../../utiltyFunc';

const CircularChart = ({circleData, energyMan}: any) => {
  return (
    <>
      {/* CIrcular Chart */}
      <View style={style.pDiv}>
        <Text style={style.CCTextE}>Energy Management</Text>
        <Text style={style.CCTextY}>Yield</Text>

        <View style={style.circleDiv}>
          <View style={style.CC2}>
            <View style={style.JC}>
              <Text style={style.CCValue1}>
                {twoDecimal(energyMan?.consumed)}
              </Text>
            </View>

            <View style={style.JC}>
              <Text style={style.CCText}>KWH</Text>
            </View>

            <View style={style.CCC}>
              <Text style={style.CCText}>Consumed</Text>
            </View>
            <View style={style.CCC}>
              <Text style={style.CCText}>
                {twoDecimal(energyMan?.percentage_of_consumed)} %
              </Text>
            </View>
          </View>
          <View style={style.f1}>
            <PieChart
              donut
              innerRadius={30}
              radius={45}
              data={circleData}
              centerLabelComponent={() => {
                return (
                  <Text style={style.CCInnerText}>
                    {twoDecimal(energyMan?.percentage_of_fed_to_grid)}%
                  </Text>
                );
              }}
            />
          </View>
          <View style={style.CC2}>
            <View style={style.RCC}>
              <View style={style.JC}>
                <Text style={style.CCValue2}>
                  {twoDecimal(energyMan?.fed_to_grid)}
                </Text>
              </View>

              {/* <View style={style.JC}>
                <Text style={style.CCText}>KWH</Text>
              </View> */}
            </View>

            <View style={style.CCC}>
              <Text style={style.CCText}>KWH</Text>
            </View>

            <View style={style.CCC}>
              <Text style={style.CCText}>Fed to grid</Text>
            </View>

            <View style={style.CCC}>
              <Text style={style.CCText}>
                {twoDecimal(energyMan?.percentage_of_fed_to_grid)}%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default CircularChart;
