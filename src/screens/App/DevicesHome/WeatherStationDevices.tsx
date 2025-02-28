import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  Alert,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';

import {WSImages} from '../../../ui/Images';
import styles from './styles';

import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import {twoDecimal} from '../../../utiltyFunc';
import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';
import EcomContext from '../../../contextApi/DataProvider';
const WeatherStationDevicesCard = ({navigation}: any) => {
  const {plant, setplant, Data}: any = useContext(EcomContext);
  const [activeSection, setactiveSection] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [wsDevices, setwsDevices] = useState([]);
  const dispatch = useDispatch();

  const item = [
    {
      id: 1,
      DeviceName: 'Solar Iradius ',
      Value: 'Solar Irradius Value:',
      Unit: 'R ☉',
    },
    {
      id: 2,
      DeviceName: 'Wind Speed ',
      Value: 'Wind Speed Value:',
      Unit: 'm/sec',
    },
    {
      id: 3,
      DeviceName: 'Wind Direction ',
      Value: 'Wind Direction Value:',
      Unit: 'm/sec',
    },
    {
      id: 4,
      DeviceName: 'PV Temprature ',
      Value: 'PV Temprature Value:',
      Unit: '°C',
    },
    {
      id: 5,
      DeviceName: 'Ambient Temprature ',
      Value: 'Ambient Temprature Value:',
      Unit: '°C',
    },
    {
      id: 6,
      DeviceName: 'Humidity ',
      Value: 'Humidity Value:',
      Unit: 'g.m-3',
    },
  ];
  const deviceDetailNavFunWeather = val => {
    navigation.navigate('DeviceDetailWeather', {val: val});
    // Alert.alert('Add Pressed');
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={200}
        style={[isActive ? styles.active : styles.inactive]}>
        <View style={styles.headerView}>
          <View style={styles.f6}>
            <Text style={styles.headerTitle}>{section.DeviceName}</Text>
          </View>

          <View style={styles.f1}>
            {isActive ? (
              <Image source={WSImages.Up} style={styles.iconSize} />
            ) : (
              <Image source={WSImages.Down} style={styles.iconSize} />
            )}
          </View>
        </View>
      </Animatable.View>
    );
  };

  const updateSections = activeSections => {
    setactiveSection(activeSections);
    // this.setState({activeSections});
  };

  const renderContent = (section, _, isActive) => {
    return (
      <TouchableOpacity onPress={() => deviceDetailNavFunWeather(section)}>
        <Animatable.View
          duration={0}
          style={[isActive ? styles.active : styles.inactive]}>
          <Animatable.View easing="ease-out"></Animatable.View>
          {/* <View style={styles.fRow}>
            <View style={styles.f1}>
              <Animatable.Text
                duration={0}
                easing="ease-out"
                style={styles.expandableText}>
                Status :
              </Animatable.Text>
            </View>
            <View style={styles.f1}>
              <Animatable.Text
                duration={0}
                easing="ease-out"
                style={styles.expandableTextV}>
                Active
              </Animatable.Text>
            </View>
          </View> */}
          <View style={styles.fRow}>
            <View style={styles.f1}>
              <Animatable.Text
                duration={0}
                easing="ease-out"
                style={styles.expandableText}>
                Value:
              </Animatable.Text>
            </View>
            <View style={styles.f1}>
              <Animatable.Text
                duration={0}
                easing="ease-out"
                style={styles.expandableTextV}>
                {section.Value}
              </Animatable.Text>
            </View>
          </View>

          <View style={styles.space}></View>
        </Animatable.View>
      </TouchableOpacity>
    );
  };
  const getDevicesList = async () => {
    try {
      setisLoading(true);
      let obj = {
        plant: plant,
        token: Data,
      };
      dispatch(Services.getDevicesList(obj)).then(data => {
        //    console.log(data.payload, 'from getDevicesList');
        if (data.payload?.devicesData) {
          let GridArray = data.payload?.devicesData.filter(
            item => item.type === 'Weather_station',
          );
          const arr = [];
          let inc = 1;
          //console.log(GridArray[0],"GridArray -->");
          for (const [key, value] of Object.entries(GridArray[0])) {
        //    console.log(`${key}: ${value}`, '---->');
            if (key === 'Solar_Irad') {
              let obj = {
                id: inc++,
                DeviceName: 'Solar Iradius',
                DeviceKey: key,
                Value: value,
                Unit: 'R ☉',
              };
              arr.push(obj);
            } else if (key === 'Wind_Speed') {
              let obj = {
                id: inc++,
                DeviceName: 'Wind Speed',
                DeviceKey: key,
                Value: value,
                Unit: 'm/sec',
              };
              arr.push(obj);
            }
            if (key === 'Wind_Direction') {
              let obj = {
                id: inc++,
                DeviceName: 'Wind Direction',
                DeviceKey: key,
                Value: value,
                Unit: 'm/sec',
              };
              arr.push(obj);
            }
            if (key === 'Temperature') {
              let obj = {
                id: inc++,
                DeviceName: 'PV Temprature',
                DeviceKey: key,
                Value: value,
                Unit: '°C',
              };
              arr.push(obj);
            }
            if (key === 'AMBIENT_Temperature') {
              let obj = {
                id: inc++,
                DeviceName: 'Ambient Temprature',
                DeviceKey: key,
                Value: value,
                Unit: '°C',
              };
              arr.push(obj);
            }
            if (key === 'Humidity') {
              let obj = {
                id: inc++,
                DeviceName: 'Humidity',
                DeviceKey: key,
                Value: value,
                Unit: 'g.m-3',
              };
              arr.push(obj);
            }
          }
       //   console.log(arr, 'arr===>');
          //  setinverterDevices(InverterArray);
          setwsDevices(arr);
          setisLoading(false);
        }
      });
    } catch (err) {
      ShowToast('error', 'No records.');
      setisLoading(false);
    } finally {
      //  setisLoading(false);
    }
  };
  useEffect(() => {
    getDevicesList();
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <ScrollView>
      <Accordion
        activeSections={activeSection}
        sections={wsDevices}
        //   renderSectionTitle={renderSectionTitle}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
        duration={400}
        touchableComponent={TouchableOpacity}
      />
    </ScrollView>
  );
};

export default WeatherStationDevicesCard;
