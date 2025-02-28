import React, {useState, useEffect} from 'react';
import {Text, Image, View, Pressable, StyleSheet} from 'react-native';

import style from '../styles';
import Paho from 'paho-mqtt';

const LeftIconHomeC = ({
  valueVLN,
  valueImage,
  setAnimation3Type,
  setValueVLN,
}) => {
  const [Topic3, setTopic3] = useState('FET_ZC_HAR_GENERATOR1');

  let client = new Paho.Client(
    'broker.hivemq.com',
    Number(8000),
    'clientIDhgfaswe2',
  );

  async function onMessage3(message) {
    if (message.destinationName === Topic3) {
      setAnimation3Type(2);
      const a = JSON.parse(message.payloadString);
         console.log(a," <----- 3");
      //  setValueFrequency(a?.d?.Total_Active_Power);
      //  setValueFrequency(a.d.SENERGY);
      setValueVLN(a?.d?.Total_Active_Power);
    }
  }

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log('Connected!');

        // client.subscribe(Topic2);
        // client.onMessageArrived = onMessage2;

        client.subscribe(Topic3);
        client.onMessageArrived = onMessage3;
      },
      onFailure: () => {
        console.log('Failed to connect!');
      },
    });
  }, []);
  return (
    <View style={style.leftIcon3Wrap}>
      <View style={style.center}>
        <Text style={style.realValue}>{valueVLN}</Text>
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

export default LeftIconHomeC;
