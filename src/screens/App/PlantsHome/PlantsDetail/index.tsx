import React, {useState, useContext, useEffect, useRef} from 'react';
import EcomContext from '../../../../contextApi/DataProvider';
//import Loader from '../../../ui/Loader';
//import Error404 from '../../../ui/Error';
import {Image, Alert, ScrollView, View, Text} from 'react-native';
import Paho from 'paho-mqtt';
import LinearGradient from 'react-native-linear-gradient';

import {PlantDetailImages} from '../../../../ui/Images';
import HeaderCommon from '../../../../ui/HeaderCommon';
import colors from '../../../../theme/colors';
import style from './styles';

import { twoDecimal } from '../../../../utiltyFunc';

import Animation3Node from './Animatiion3Node';
import Animation4Node from './Animation4Node';
import Animation2Node from './Animation2Node';

export const PlantDetail = (props: any) => {
  const {plant, setplant}: any = useContext(EcomContext);
  //Alert.alert(plant);
  //console.log(plant, '---->');
  const [valueVolt, setValueVolt] = useState([]);
  const [valueFrequency, setValueFrequency] = useState([]);
  const [valueVLN, setValueVLN] = useState([]);
  const [Topic, setTopic] = useState('FET_ZC_HAR_SOLAR1');

  const [AnimationType, setAnimationType] = useState(4);
  const [Animation4Type, setAnimation4Type] = useState(0);
  const [Animation3Type, setAnimation3Type] = useState(0);


  useEffect(() => {
    if (plant?.plant_mimic_type === 'S+W+L' ) {
      setAnimationType(3);
      
    } else if (plant?.plant_mimic_type === 'S+W+G+L') {
      setAnimationType(4);
    }
  }, []);

  return (
    <>
      <HeaderCommon
        showLeftIcon={true}
        leftIcon={PlantDetailImages.back}
        leftCallBack={() => props.navigation.goBack()}
        title={'Plant Details'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />
      <ScrollView>
        <LinearGradient
          colors={[colors.white, colors.fetLightBlue]}
          style={style.f1l}>
          {AnimationType == 3 ? (
            <Animation3Node
            name={plant}
            setAnimation3Type={setAnimation3Type}
              animationFile={
                Animation3Type === 3
                  ? PlantDetailImages.Animation3TLRL
                  : Animation3Type == 2
                  ? PlantDetailImages.Animation3TLR
                  : PlantDetailImages.Animation3TL
              }
            />
          ) : AnimationType == 4 ? (
            <Animation4Node
        setAnimation4Type={setAnimation4Type}
              name={plant}
              animationFile={
                Animation4Type === 6
                  ? PlantDetailImages._4linesAnimation06
                  : Animation4Type === 5
                  ? PlantDetailImages._4linesAnimation05
                  : Animation4Type === 4
                  ? PlantDetailImages._4linesAnimation04
                  : Animation4Type === 3
                  ? PlantDetailImages._4linesAnimation03
                  : Animation4Type == 2
                  ? PlantDetailImages._4linesAnimation02
                  : PlantDetailImages._4linesAnimation01
              }
            />
          ) : (
            <Animation2Node
              name={'Plant Name Here 2'}
              animationFile={PlantDetailImages.Animation2}
            />
          )}

          {/* 1st row */}
          <View style={style.smallRowWrap}>
            <View style={style.smallRowInerWrap}>
              <View style={style.smallRowIconWrap}>
                <Image
                  source={PlantDetailImages.solar}
                  style={style.smallRowIcon}
                />
              </View>
              <View style={style.smallRowTextWrap}>
                <View style={style.row}>
                  <View style={style.f2}>
                    <Text style={style.smallRowValue}>{plant?.YIELD_TODAY}</Text>
                  </View>
                  <View style={style.f2}>
                    <Text style={style.smallRowUnit}>KWH</Text>
                  </View>
                </View>
                <Text style={style.smallRowTitle}>Yield today</Text>
              </View>
            </View>

            <View style={style.fcustom}></View>
            <View style={style.smallRowInerWrap}>
              <View style={style.smallRowIconWrap}>
                <Image
                  source={PlantDetailImages.powerS}
                  style={style.smallRowIcon}
                />
              </View>
              <View style={style.smallRowTextWrap}>
                <View style={style.row}>
                  <View style={style.f2}>
                    <Text style={style.smallRowValue}>{plant?.FUEL_SAVE_TODAY}</Text>
                  </View>
                  <View style={style.f2}>
                    <Text style={style.smallRowUnit}>litter</Text>
                  </View>
                </View>
                <Text style={style.smallRowTitle}>Fuel Save Today</Text>
              </View>
            </View>
          </View>

          {/* 2nd row */}
          <View style={style.longDivWrap}>
            <View style={style.elemntTopWrap}>
              <View style={style.elementinnerWrap}>
                <View>
                  <Text style={style.longDivValue}>{plant?.YIELD_MONTHLY}</Text>
                </View>
                <View>
                  <Text style={style.longDivUnit}>KWH</Text>
                </View>
              </View>
              <Text style={style.longDivTitle}>Yield this month</Text>
            </View>
            <View style={style.elemntTopWrap}>
              <View style={style.elementinnerWrap}>
                <View>
                  <Text style={style.longDivValue}>{plant?.YIELD_YEARLY}</Text>
                </View>
                <View>
                  <Text style={style.longDivUnit}>KWH</Text>
                </View>
              </View>
              <Text style={style.longDivTitle}>Yield this year</Text>
            </View>
            <View style={style.elemntTopWrap}>
              <View style={style.elementinnerWrap}>
                <View>
                  <Text style={style.longDivValue}>{plant?.YIELD_TOTAL}</Text>
                </View>
                <View>
                  <Text style={style.longDivUnit}>KWH</Text>
                </View>
              </View>
              <Text style={style.longDivTitle}>Total Yield</Text>
            </View>
          </View>

          {/* 3rd row */}
          <View style={style.longDivWrap}>
            <View style={style.elemntTopWrap}>
              <View style={style.elementinnerWrap}>
                <View>
                  <Text style={style.longDivValue}>{plant?.Genrator}</Text>
                </View>
                <View>
                  <Text style={style.longDivUnit}>KWH</Text>
                </View>
              </View>
              <Text style={style.longDivTitle}>Generator</Text>
            </View>
            <View style={style.elemntTopWrap}>
              <View style={style.elementinnerWrap}>
                <View>
                  <Text style={style.longDivValue}>{twoDecimal(plant?.Mains)}</Text>
                </View>
                <View>
                  <Text style={style.longDivUnit}>KWH</Text>
                </View>
              </View>
              <Text style={style.longDivTitle}>Mains</Text>
            </View>
            <View style={style.elemntTopWrap}>
              <View style={style.elementinnerWrap}>
                <View>
              
                <Text style={style.longDivValue}>{twoDecimal(plant?.Load)}</Text>
                </View>
                <View>
                  <Text style={style.longDivUnit}>KWH</Text>
                </View>
              </View>
              <Text style={style.longDivTitle}>Load</Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </>
  );
};
