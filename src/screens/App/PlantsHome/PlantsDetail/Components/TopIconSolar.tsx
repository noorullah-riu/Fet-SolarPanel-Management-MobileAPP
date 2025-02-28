import React, {useState,useEffect} from 'react';
import {Text,Image, View, Pressable, StyleSheet} from 'react-native';

import style from '../styles';
import Paho from 'paho-mqtt';

const TopIconSolarC = ({valueVolt,valueImage,setValueVolt,setAnimation3Type}) => {
  const [Topic, setTopic] = useState('FET_ZC_HAR_SOLAR1');

  let client = new Paho.Client(
    'broker.hivemq.com',
    Number(8000),
    'clientIDhgfaswe3',
  );


  async function onMessage(message) {
    if (message.destinationName === Topic) {
      setAnimation3Type(2);
      const a = JSON.parse(message.payloadString);
      console.log(a, ' <----- 1');
      setValueVolt(a?.d?.ACTIVE_POWER);
      //  setValueFrequency(a.d.SENERGY);
      //  setValueVLN(a.d.SVOLT);
    }
  }

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log('Connected!');

        client.subscribe(Topic);
        client.onMessageArrived = onMessage;

        // client.subscribe(Topic2);
        // client.onMessageArrived = onMessage2;

        // client.subscribe(Topic3);
        // client.onMessageArrived = onMessage3;
      },
      onFailure: () => {
        console.log('Failed to connect!');
      },
    });
  }, []);
  return (
    <View style={style.topIconWrap}>
    <View style={style.center}>
      <Text style={style.realValue}>{valueVolt}</Text>
    </View>
    <View style={style.center}>
      <Text style={style.realUnit}> Kw</Text>
    </View>
    <View style={style.center}>
      <Image source={valueImage} style={style.icon3DSize} />
    </View>
  </View>
  );
};

export default TopIconSolarC;
