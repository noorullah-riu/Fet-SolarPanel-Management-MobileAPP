import React from 'react';
import {Text, View, FlatList, Pressable, Image} from 'react-native';
import LottieView from 'lottie-react-native';

import {PlantDetailImages} from '../../../../ui/Images';
import style from './styles';

const Animation2Node = ({animationFile, name,}: any) => {
  return (
    <View style={style.uperWrap}>
      <Text style={style.plantName}>{name}</Text>
      {/* Top Icom */}
      <View style={style.topIconWrap}>
        <View style={style.center}>
          <Text style={style.realValue}>3.98</Text>
        </View>
        <View style={style.center}>
          <Text style={style.realUnit}>Kw</Text>
        </View>
        <View style={style.center}>
          <Image source={PlantDetailImages.Grid3} style={style.icon3DSize} />
        </View>
      </View>
      {/* 2 Icons */}
      <View style={style.row}>
        {/* Animation  */}
        <View style={style.animationWrap}>
          <LottieView
            style={style.animationSize}
            autoPlay
            source={animationFile}
          />
        </View>

        {/* Right Icon  */}
      </View>
      {/* Bottom Icom */}
      <View style={style.bottomIconWrap}>
        <View style={style.center}>
          <Image source={PlantDetailImages.Home3} style={style.icon3DSize} />
        </View>
        <View style={style.center}>
          <Text style={style.realValue}>6.54</Text>
        </View>
        <View style={style.center}>
          <Text style={style.realUnit}> KW</Text>
        </View>
      </View>
    </View>
  );
};

export default Animation2Node;
