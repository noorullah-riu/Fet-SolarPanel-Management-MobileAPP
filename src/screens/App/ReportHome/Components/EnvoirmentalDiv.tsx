import React, {useState} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import style from '../style';
import { twoDecimal } from '../../../../utiltyFunc';

import { ReportsImages } from '../../../../ui/Images';
const EnvoirmentalBenifits = ({lineData}: any) => {
  return (
    <>
      {/* Envoirmental Div */}
      <View style={style.pDiv}>
        <Text style={style.CCTextE}>Environmental benifits</Text>
        <View style={style.EBDivWraper}>
          <View style={style.EBDiv1}>
            <Text style={style.EBValue}>{twoDecimal(lineData?.standard_coal_saved)}</Text>
            <Text style={style.EBText}>Standard coal saved</Text>
            <View style={style.EBIconWraper}>
              <Image source={ReportsImages.coal} style={style.EBIconSize} />
            </View>
          </View>
          <View style={style.EBDiv2}>
            <Text style={style.EBValue}>{twoDecimal(lineData?.co2_avoided)}</Text>
            <Text style={style.EBText}>
              CO2 avoided
              {'          -  '}
            </Text>
            <View style={style.EBIconWraper}>
              <Image source={ReportsImages.co2} style={style.EBIconSize} />
            </View>
          </View>
          <View style={style.EBDiv3}>
            <Text style={style.EBValue}>{twoDecimal(lineData?.equivalent_trees_planted)}</Text>
            <Text style={style.EBText}>Equivalent trees planted</Text>
            <View style={style.EBIconWraper}>
              <Image source={ReportsImages.tree} style={style.EBIconSize} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default EnvoirmentalBenifits;
