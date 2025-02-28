import React, {useState} from 'react';
import {Text, Image, View} from 'react-native';
import style from '../style';
import {PieChart} from 'react-native-gifted-charts';
import {twoDecimal} from '../../../../utiltyFunc';

const PieChartDiv = ({pieDataB, pieData, type}: any) => {
  return (
    <>
      {/* Pie Chart */}
      <View style={style.pDiv}>
        <Text style={style.CCTextY}>{type}</Text>
        <View style={style.pDiv}>
          <View style={style.PCWraper}>
            <PieChart
              showText
              textColor="#fff"
              //    radius={150}

              //   showTextBackground
          //    textBackgroundColor="#fff"
          //    textBackgroundRadius={15}
              //   textColor="white"
              textSize={13}
              //   textSize={20}
           //   showTextBackground
              data={pieData}
              radius={80}
            />
          </View>
          <View style={style.PCBtnWraper}>
            <View style={style.DivG}>
              <Text style={style.PCBtnText}>Grid</Text>
              <Text style={style.PCBtnText}>
                {twoDecimal(pieDataB?.grid)} Kwh
              </Text>
            </View>
            <View style={style.DivY}>
              <Text style={style.PCBtnText}>Solar</Text>
              <Text style={style.PCBtnText}>
                {twoDecimal(pieDataB?.solar)} Kwh
              </Text>
            </View>
            <View style={style.DivB}>
              <Text style={style.PCBtnText}>Generator</Text>
              <Text style={style.PCBtnText}>
                {twoDecimal(pieDataB?.generator)} Kwh
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default PieChartDiv;
