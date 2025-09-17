import React, { useEffect, useState } from 'react';
import { Text, View,Dimensions, FlatList, Pressable, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native';

import { PlantDetailImages } from '../../../../ui/Images';
import style from './styles';
import Paho from 'paho-mqtt';
import { twoDecimal } from '../../../../utiltyFunc';
import colors from '../../../../theme/colors';
import init from 'react_native_mqtt';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Animation4Node = ({
  animationFile,
  name,
  setAnimation4Type,
  plantDetailNavFUn,
}: any) => {
  const [Topic4, setTopic4] = useState('FET_PE_PCD_NODE');

  const [solarVal, setsolarVal] = useState([]);
  const [gridVal, setgridVal] = useState([]);
  const [genVal, setgenVal] = useState([]);
  const [loadVal, setloadVal] = useState([]);
  const [isLoading, setisLoading] = useState(true);
//  console.log(name.plant_topic, ' <----- name');
  // let client = new Paho.Client(
  //   'broker.hivemq.com',
  //   Number(8000),
  //   'clientIDhgfaswe4',
  // );

  // async function onMessage(message) {
  //   if (message.destinationName === Topic4) {
  //     //  setAnimation4Type(2);
  //     const a = JSON.parse(message.payloadString);
  //     //  console.log(a, ' <----- 1');
  //     setsolarVal(a?.d?.SOLAR_POWER);
  //     setgridVal(a?.d?.GRID_POWER);
  //     setgenVal(a?.d?.GEN_POWER);
  //     setloadVal(a?.d?.LOAD_POWER);

  //     if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER < 0) {
  //       console.log(a?.d?.SOLAR_POWER[0], 'SOLAR_POWER');
  //       setAnimation4Type(2); //2
  //     } else if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER > 0) {
  //       console.log(a?.d?.GRID_POWER[0], 'GRID_POWER');
  //       setAnimation4Type(3); //3
  //     } else if (a?.d?.GRID_POWER > 0) {
  //       console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
  //       setAnimation4Type(6);
  //     } else if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GEN_POWER[0] > 0) {
  //       console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
  //       setAnimation4Type(1);
  //     } else if (
  //       a?.d?.SOLAR_POWER[0] > 0 &&
  //       a?.d?.GEN_POWER[0] > 0 &&
  //       a?.d?.GRID_POWER[0] > 0
  //     ) {
  //       console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
  //       setAnimation4Type(5);
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

  init({
    size: 0,
    storageBackend: AsyncStorage,
    defaultExpires: 100,
    enableCache: false,
    reconnect: true,
    sync: {},
  });

  function onConnect() {
    // Alert.alert('onConnect here ');
    //  console.log('onConnect');

    client.subscribe(name?.plant_topic);
    //client.subscribe(Topic4);
  }

  function onConnectionLost(responseObject) {
    // console.log('onConnectionLost:' + responseObject.errorMessage);
    if (responseObject.errorCode !== 0) {
      //   console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
   //   var x = 'Message : ' + message;
    //  console.log(x);

    //  const a = JSON.parse(message.payloadString);
    //  console.log(a, '-->');

     /// Alert.alert('message here ');

    if (message) {
      //   setisLoading(true);
      const a = JSON.parse(message.payloadString);
     // console.log(a, '--> 4 node ');
      setsolarVal(a?.d?.SOLAR_POWER);
      setgridVal(a?.d?.GRID_POWER);
      setgenVal(a?.d?.GEN_POWER);

      const b = a?.d?.GEN_POWER[0] + a?.d?.GRID_POWER[0] + a?.d?.SOLAR_POWER[0];
      //  console.log(b, '-->');
      setloadVal(b);

      if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER < 0) {
        //  console.log(a?.d?.SOLAR_POWER[0], 'SOLAR_POWER');
        setAnimation4Type(2); //2
      } else if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GRID_POWER > 0) {
        //    console.log(a?.d?.GRID_POWER[0], 'GRID_POWER');
        setAnimation4Type(3); //3
      } else if (a?.d?.GRID_POWER > 0) {
        //     console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
        setAnimation4Type(6);
      } else if (a?.d?.SOLAR_POWER[0] > 0 && a?.d?.GEN_POWER[0] > 0) {
        //   console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
        setAnimation4Type(1);
      } else if (
        a?.d?.SOLAR_POWER[0] > 0 &&
        a?.d?.GEN_POWER[0] > 0 &&
        a?.d?.GRID_POWER[0] > 0
      ) {
        //  console.log(a?.d?.LOAD_POWER[0], 'LOAD_POWER');
        setAnimation4Type(5);
      }
      setisLoading(false);
    }
  }
  const client = new Paho.Client('broker.hivemq.com', 8000, 'unam4e');
  client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess: onConnect, useSSL: false });
  client.onConnectionLost = onConnectionLost;

  return (
    <View style={style.uperWrap}>
      <Text style={style.plantName}>{name.plant_name}</Text>
      {/* Top Icom */}
      <View style={style.topIconWrap}>
        <View style={style.center}>
          <Text style={style.realValue}>{twoDecimal(solarVal)}</Text>
        </View>
        <View style={style.center}>
          <Text style={style.realUnit}>Kw</Text>
        </View>
        <View style={style.center}>
          <Image source={PlantDetailImages.PV3} style={style.icon3DSize} />
        </View>
      </View>
      {/* 2 Icons */}
      <View style={style.row}>
        {/* Left Icons */}
        <View style={style.leftIconWrap}>
          <View style={style.center}>
            <Text style={style.realValue}>{twoDecimal(genVal)}</Text>
          </View>
          <View style={style.center}>
            <Text style={style.realUnit}>KW</Text>
          </View>

          <View style={style.imageWrap}>
            <Image
              source={PlantDetailImages.Battery3}
              style={style.icon3DSize}
            />
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
        <View style={style.rightIconWrap}>
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
      {/* Bottom Icom */}
      <View style={style.bottomIconWrap}>
        <View style={style.center}>
          <Image source={PlantDetailImages.Home3} style={style.icon3DSize} />
        </View>
        <View style={style.center}>
          <Text style={style.realValue}>{twoDecimal(loadVal)}</Text>
        </View>
        <View style={style.center}>
          <Text style={style.realUnit}> KW</Text>
        </View>
      </View>
    </View>
  );
};

export default Animation4Node;
