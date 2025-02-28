import React, {useState, useEffect} from 'react';
import {Text, Image, View, Pressable, StyleSheet} from 'react-native';

import style from '../styles';
import Paho from 'paho-mqtt';

const RightIconGridC = ({
  valueFrequency,
  valueImage,
  setAnimation3Type,
  setValueFrequency,
}) => {
  const [Topic2, setTopic2] = useState('FET_ZC_HAR_GRID1');

  let client = new Paho.Client(
    'broker.hivemq.com',
    Number(8000),
    'clientIDhgfaswe1',
  );

  async function onMessage2(message) {
    if (message.destinationName === Topic2) {
      setAnimation3Type(2);
      const a = JSON.parse(message.payloadString);
      console.log(a, ' <----- 2');
      setValueFrequency(a?.d?.Total_Active_Power);
      //  setValueFrequency(a.d.SENERGY);
      //  setValueVLN(a.d.SVOLT);
    }
  }

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log('Connected!');

        client.subscribe(Topic2);
        client.onMessageArrived = onMessage2;
      },
      onFailure: () => {
        console.log('Failed to connect!');
      },
    });
  }, []);
  return (
    <View style={style.leftIcon3Wrap}>
      <View style={style.center}>
        <Text style={style.realValue}>{valueFrequency}</Text>
      </View>
      <View style={style.center}>
        <Text style={style.realUnit}> KW</Text>
      </View>

      <View style={style.imageWrap}>
        <Image source={valueImage} style={style.icon3DSize} />
      </View>
    </View>
  );
};

export default RightIconGridC;
