import React, { useEffect, useContext, useState } from 'react';
import { Text, View, ScrollView, FlatList, Pressable, Image } from 'react-native';
import EcomContext from '../../../contextApi/DataProvider';
import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../networking/auth/Services';

import Loader from '../../../ui/Loader';
import styles from './styles';
import ShowToast from '../../../ui/Toast';
import { twoDecimal } from '../../../utiltyFunc';
const AllDevicesCard = ({ navigation }: any) => {
  const { plant, setplant, Data }: any = useContext(EcomContext);
  //console.log(plant, 'Devices ---->');

  const [inverterDevices, setinverterDevices] = useState([]);
  const [gridDevices, setgridDevices] = useState([]);
  const [genDevices, setgenDevices] = useState([]);
  const [loadDevices, setloadDevices] = useState([]);
  const [wSDevices, setwSDevices] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();

  const WS = [
    {
      id: 1,
      companyName: 'GREEN FOOD ',
      OrderId: 'R000011',
      Quantity: '3000',
      Total: '221130',
    },
  ];

  const deviceDetailNavFUn = item => {
    navigation.navigate('DeviceDetail', { routeVal: item });
    // Alert.alert('Add Pressed');
  };
  const deviceDetailNavFunLoad = item => {
    navigation.navigate('DeviceDetailLoad', { routeVal: item });
    // Alert.alert('Add Pressed');
  };

  const deviceDetailNavFunGen = item => {
    navigation.navigate('DeviceDetailGen', { routeVal: item });
    // Alert.alert('Add Pressed');
  };
  const deviceDetailNavFunGrid = item => {
    navigation.navigate('DeviceDetailGrid', { routeVal: item });
    // Alert.alert('Add Pressed');
  };

  const deviceDetailNavFunWeather = () => {
    navigation.navigate('DeviclWeather');
    // Alert.alert('Add Pressed');
  };
  const renderItemInvertor = ({ item }) => (
    <Pressable onPress={() => deviceDetailNavFUn(item)} style={styles.pDivAll}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.device_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>SN</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>{item?.serial}</Text>
          </View>
        </View>



        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ACTIVE_POWER)} kw
            </Text>
          </View>
        </View>
            <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Inverter Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Inverter_Active_Power)} kw
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Power Factor</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.POWER_FACTOR)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Capacity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {item?.INVERTER_RATED_POWER || 0}  kw
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Today yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.YIELD_TODAY)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Month yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.YIELD_MONTHLY)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Year yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.YIELD_YEARLY)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total yield</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.YIELD_TOTAL)} kwh
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderItemLoad = ({ item }) => (
    <Pressable
      onPress={() => deviceDetailNavFunLoad(item)}
      style={styles.pDivAll}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.device_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status || 'null'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>SN</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>{item?.serial}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ACTIVE_POWER_load)} kw
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Power Factor</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.POWER_FACTOR_load)}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Today Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Today_Consumption)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Month Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Consumption_MONTHLY)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Year Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Consumption_YEARLY)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total Consumption</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Consumption_TOTAL)} kwh
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderItemGrid = ({ item }) => (
    <Pressable
      onPress={() => deviceDetailNavFunGrid(item)}
      style={styles.pDivAll}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.device_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status || 'null'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>SN</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>{item?.serial}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Active_Power_L1)} kw
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Capacity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.capacity)} kva
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Import Monthly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Total_Import_Energy_monthly)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Import Yearly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Total_Import_Energy_yearly)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Import Total </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Total_Import_Energy_total)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Export Monthly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Total_Export_Energy_monthly)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Export Yearly</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Total_Export_Energy_yearly)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Export Total </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Total_Export_Energy_total)} kwh
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderItemGen = ({ item }) => (
    <Pressable
      onPress={() => deviceDetailNavFunGen(item)}
      style={styles.pDivAll}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.splanText}>{item?.device_name}</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.priorityText}>{item?.status || 'null'}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>SN</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>{item?.serial}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Active Power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ACTIVE_POWER) || 0} kw
            </Text>
          </View>
        </View>
          <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Inverter Active power</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ACTIVE_POWER) || 0} kw
            </Text>
          </View>
        </View>

        

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Capacity</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.capacity)} kva
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Today Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.Today_Energy)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Month Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ENERGY_MONTHLY)} kwh
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>This Year Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ENERGY_YEARLY)} kwh
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f1}>
            <Text style={styles.TitleText}>Total Energy</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextAll}>
              {twoDecimal(item?.ENERGY_TOTAL)} kwh
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const renderItemWS = ({ item }) => (
    <Pressable
      onPress={() => deviceDetailNavFunWeather()}
      style={styles.pDivAll}>
      <View style={styles.f4}>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.TitleText}>Solar Iradius</Text>
          </View>
          <View style={styles.f3E}>
            <Text style={styles.ValueText}>{item?.Solar_Irad} </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextM}>R ☉</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.TitleText}>Wind Speed</Text>
          </View>
          <View style={styles.f3E}>
            <Text style={styles.ValueText}>{item?.Wind_Speed} </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextM}>m/sec</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.TitleText}>Wind Direction</Text>
          </View>
          <View style={styles.f3E}>
            <Text style={styles.ValueText}>{item?.Wind_Direction} </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextM}>m/sec</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.TitleText}>PV Temprature</Text>
          </View>
          <View style={styles.f3E}>
            <Text style={styles.ValueText}>{item?.Temperature} </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextM}>°C</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.TitleText}>Ambient Temprature</Text>
          </View>
          <View style={styles.f3E}>
            <Text style={styles.ValueText}>{item?.AMBIENT_Temperature} </Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextM}>°C</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.f4}>
            <Text style={styles.TitleText}>Humidity</Text>
          </View>
          <View style={styles.f3E}>
            <Text style={styles.ValueText}>{item?.Humidity}</Text>
          </View>
          <View style={styles.f1}>
            <Text style={styles.ValueTextM}>g.m-3</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
  const getDevicesList = async () => {
    try {
      setisLoading(true);
      let obj = {
        plant: plant,
        token: Data,
      }
      dispatch(Services.getDevicesList(obj)).then(data => {
        //   console.log(data.payload, 'from getDevicesList');
        if (data.payload?.devicesData) {
          let InverterArray = data.payload?.devicesData.filter(
            item => item.type === 'Inverter',
          );
          let GridArray = data.payload?.devicesData.filter(
            item => item.type === 'Grid',
          );
          let GenArray = data.payload?.devicesData.filter(
            item => item.type === 'Gen',
          );
          let LoadArray = data.payload?.devicesData.filter(
            item => item.type === 'Load',
          );
          let WSArray = data.payload?.devicesData.filter(
            item => item.type === 'Weather_station',
          );

          setinverterDevices(InverterArray);
          setgridDevices(GridArray);
          setgenDevices(GenArray);
          setloadDevices(LoadArray);
          setwSDevices(WSArray);
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
      <Text style={styles.verticalTitle}>Invertor</Text>
      <FlatList
        horizontal
        data={inverterDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItemInvertor}
      />

      <Text style={styles.verticalTitle}>Gen</Text>
      <FlatList
        horizontal
        data={genDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItemGen}
      />
      <Text style={styles.verticalTitle}>Grid</Text>
      <FlatList
        horizontal
        data={gridDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItemGrid}
      />
      <Text style={styles.verticalTitle}>Load</Text>
      <FlatList
        horizontal
        data={loadDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItemLoad}
      />
      <Text style={styles.verticalTitle}>Weather Station</Text>
      <FlatList
        horizontal
        data={wSDevices}
        keyExtractor={item => item.device_id}
        renderItem={renderItemWS}
      />
    </ScrollView>
  );
};

export default AllDevicesCard;
