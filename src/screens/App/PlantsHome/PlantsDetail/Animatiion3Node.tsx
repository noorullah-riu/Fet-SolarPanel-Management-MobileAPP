import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Pressable, Image, Alert } from 'react-native';
import LottieView from 'lottie-react-native';

import { PlantDetailImages } from '../../../../ui/Images';
import style from './styles';
import Paho from 'paho-mqtt';
import Loader from '../../../../ui/Loader';
import { ActivityIndicator } from 'react-native';
import { twoDecimal } from '../../../../utiltyFunc';
//import TopIconSolarC from './Components/TopIconSolar';
//import LeftIconHomeC from './Components/LeftIconHome';
//import RightIconGridC from './Components/RightIconGrid';
//import {Client, Message} from 'react-native-paho-mqtt';
import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../../../theme/colors';
const Animation3Node = ({
  animationFile,
  setAnimation3Type,
  name,
  plantDetailNavFUn,
}: any) => {
  const [Topic, setTopic] = useState('FET_ZC_HAR_SOLAR1');
  const [Topic2, setTopic2] = useState('FET_ZC_HAR_GRID1');
  const [Topic3, setTopic3] = useState('FET_ZC_HAR_GENERATOR1');
  const [Topic4, setTopic4] = useState('FET_PE_PCD_NODE');

  const [isLoading, setisLoading] = useState(true);

  const [solarVal, setsolarVal] = useState([]);
  const [gridVal, setgridVal] = useState([]);
  const [genVal, setgenVal] = useState([]);
  const [loadVal, setloadVal] = useState([]);

  init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 10,
    enableCache: false,
    reconnect: true,
    sync: {},
  });


  function onConnect() {
    // Alert.alert('onConnect here ');
    //  console.log('onConnect');
    client.subscribe(name?.plant_topic);
  }

  function onConnectionLost(responseObject) {
    /// console.log('onConnectionLost:' + responseObject.errorMessage);
    if (responseObject.errorCode !== 0) {
    //  console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    //  var x = 'Message : ' + message;
    // console.log(x);
    // Alert.alert('message here ');

    if (message) {
      //   setisLoading(true);
      const a = JSON.parse(message.payloadString);
     // console.log(a, '-->');
      setsolarVal(a?.d?.SOLAR_POWER);
      setgridVal(a?.d?.GRID_POWER);
      //   setgenVal(a?.d?.GEN_POWER);
      setloadVal(a?.d?.LOAD_POWER);

      if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER < 0) {
        //   console.log(a?.d?.SOLAR_POWER[0], 'SOLAR_POWER');
        setAnimation3Type(2);
      } else if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER > 0) {
        //  console.log(a?.d?.GRID_POWER[0], 'GRID_POWER');
        setAnimation3Type(3);
      } else {
        //  console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
        setAnimation3Type(1);
      }
      setisLoading(false);
    }
  }
  const client = new Paho.Client('broker.hivemq.com', 8000, 'uname');
  client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess: onConnect, useSSL: false });
  client.onConnectionLost = onConnectionLost;

  // let client = new Paho.Client(
  //   'broker.hivemq.com',
  //   Number(8000),
  //   'clientIDhgfaswe4',
  // );

  // async function onMessage(message) {
  //   //  setisLoading(true);
  //   if (message.destinationName === Topic4) {
  //     const a = JSON.parse(message.payloadString);
  //     setsolarVal(a?.d?.SOLAR_POWER);
  //     setgridVal(a?.d?.GRID_POWER);
  //     //   setgenVal(a?.d?.GEN_POWER);
  //     setloadVal(a?.d?.LOAD_POWER);

  //     if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER < 0) {
  //       console.log(a?.d?.SOLAR_POWER[0], 'SOLAR_POWER');
  //       setAnimation3Type(2);
  //     } else if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER > 0) {
  //       console.log(a?.d?.GRID_POWER[0], 'GRID_POWER');
  //       setAnimation3Type(3);
  //     } else {
  //       console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
  //       setAnimation3Type(1);
  //     }

  //     setisLoading(false);
  //     //  setValueVolt(a?.d?.ACTIVE_POWER);
  //   }
  // }

  // useEffect(() => {
  //   client.connect({
  //     onSuccess: () => {
  //       console.log('Connected!');
  //       client.subscribe(Topic4);
  //       client.onMessageArrived = onMessage;
  //     },
  //     onFailure: () => {
  //       console.log('Failed to connect!');
  //     },
  //   });
  // }, []);



  return (
    <View style={style.uperWrap}>
      <Text style={style.plantName}>{name.plant_name} </Text>
      {/* Top Icom */}
      {/* <TopIconSolarC
        setAnimation3Type={setAnimation3Type}
        setValueVolt={setValueVolt}
        valueVolt={valueVolt}
        valueImage={PlantDetailImages.PV3}
      /> */}
      <View style={style.topIconWrap}>
        <View style={style.center}>
          <Text style={style.realValue}>{twoDecimal(solarVal)}</Text>
        </View>
        <View style={style.center}>
          <Text style={style.realUnit}> Kw</Text>
        </View>
        <View style={style.center}>
          <Image source={PlantDetailImages.PV3} style={style.icon3DSize} />
        </View>
      </View>
      {/* 2 Icons */}
      <View style={style.row}>
        {/* Left Icons */}
        {/* <LeftIconHomeC
          setAnimation3Type={setAnimation3Type}
          setValueVLN={setValueVLN}
          valueVLN={valueVLN}
          valueImage={PlantDetailImages.Home3}
        /> */}
        <View style={style.leftIcon3Wrap}>
          <View style={style.center}>
            <Text style={style.realValue}>{twoDecimal(loadVal)}</Text>
          </View>
          <View style={style.center}>
            <Text style={style.realUnit}> KW</Text>
          </View>

          <View style={style.imageWrap}>
            <Image source={PlantDetailImages.Home3} style={style.icon3DSize} />
          </View>
        </View>

        {/* Animation  */}
        <View style={style.animationWrap}>
          {isLoading ? (
            <ActivityIndicator color={colors.Indigo} size={'large'} />
          ) : (
            <LottieView
              style={style.animationSize}
              autoPlay
              source={animationFile}
            />
          )}
        </View>

        {/* Right Icon  */}
        {/* <RightIconGridC
          setAnimation3Type={setAnimation3Type}
          setValueFrequency={setValueFrequency}
          valueFrequency={valueFrequency}
          valueImage={PlantDetailImages.Grid3}
        /> */}
        <View style={style.rightIcon3Wrap}>
          <View style={style.center}>
            <Text style={style.realValue}>{twoDecimal(gridVal)}</Text>
          </View>
          <View style={style.center}>
            <Text style={style.realUnit}> KW</Text>
          </View>
          <View style={style.imageWrap}>
            <Image source={PlantDetailImages.Grid3} style={style.icon3DSize} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Animation3Node;
