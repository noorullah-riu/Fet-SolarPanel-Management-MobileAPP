import Paho from 'paho-mqtt';

import {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function App() {
  const [valueVolt, setValueVolt] = useState([]);
  const [valueFrequency, setValueFrequency] = useState([]);
  const [valueVLN, setValueVLN] = useState([]);
  const [Topic, setTopic] = useState('genset');
  // const [Topic, setTopic] = useState('sensor-data');
  client = new Paho.Client(
    'broker.hivemq.com',
    Number(8000),
    'clientIDhgfaswe',
  );

  async function onMessage(message) {
    if (message.destinationName === Topic) {
      const a = JSON.parse(message.payloadString);
      console.log(a);
      setValueVolt(a.d.VOlt);
      setValueFrequency(a.d.Frequency);
      //setValueVLN(a.d.V L-N);

    }
  }
  // called when a message arrives

  useEffect(() => {
    client.connect({
      onSuccess: () => {
        console.log('Connected!');
        client.subscribe(Topic);
        client.onMessageArrived = onMessage;
      },
      onFailure: () => {
        console.log('Failed to connect!');
      },
    });
  }, []);

  function changeValue(c) {
    const message = new Paho.Message((value + 10).toString());
    message.destinationName = Topic;
    console.log(message, '---> message');
    c.send(message);
  }

  return (
    <View style={styles.container}>
      <Text>Value of Volt: {valueVolt}</Text>
      <Text>Value of Frequensy : {valueFrequency}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
