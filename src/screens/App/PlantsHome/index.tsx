import React, {
  useState,
  useFocusEffect,
  useContext,
  useEffect,
  useRef,
} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import Loader from '../../../ui/Loader';
import Error404 from '../../../ui/Error';
import { Alert, Pressable, View, Text } from 'react-native';
import ShowToast from '../../../ui/Toast';
import search from '../../../assets/_Header/search.png';
import HeaderCommon from '../../../ui/HeaderCommon';
import rfSpacing from '../../../theme/rfSpacing';
import colors from '../../../theme/colors';
import PlantListCard from './PlantListCard';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import Orientation from 'react-native-orientation-locker';
export const PlantsHome = ({ navigation, route }: any) => {
  //const {docNum} = route.params;
  // Alert.alert(docNum);
  const { plant, setplant, Data }: any = useContext(EcomContext);

  //console.log(Data,"---> User Data plant screen");
  const [isLoading, setisLoading] = useState(false);
  const [platsList, setplatsList] = useState([]);

  const [platsListN, setplatsListN] = useState([]);
  const [platsListF, setplatsListF] = useState([]);
  const [platsListO, setplatsListO] = useState([]);

  const [plantStatus, setplantStatus] = useState({});
  const [statsData, setstatsData] = useState({});

  const [SearchPhrase, setSearchPhrase] = useState('');

  const [ActiveDiv, setActiveDiv] = useState('All');

  const SearchTerm = (SearchPhrase: string) => {
    setSearchPhrase(SearchPhrase);
    // const list = data.filter(element =>
    //   element.u_CardFName.toLowerCase().includes(SearchPhrase.toLowerCase()),
    // );
    // setFCustomers(list);
  };

  const plantDetailNavFUn = plant => {
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
    setplant(plant);
    navigation.navigate('PlantDetail');

    //   Alert.alert(plant_mimic_type);
  };
  const plantAddNavFUn = () => {
    // navigation.setOptions({tabBarStyle: {display: 'none'}});
    navigation.navigate('AddPlant');
    //  Alert.alert('Add Pressed');
  };
  //  let previousInputValue = useRef(0);

  //previousInputValue.current++;
  const dispatch = useDispatch();

  const getPlantHomeData = async () => {
    setisLoading(true);
    try {
      dispatch(Services.getPlantHome(Data)).then(data => {
        console.log(data.payload, 'from plantHome');

        if (data?.payload) {
          let itemn = [];
          let itemf = [];
          let itemo = [];

          data?.payload?.plantsData?.forEach(function (item, index2) {
            if (item.status === 'offline') {
              itemo.push(item);
            } else if (item.status === 'online') {
              itemn.push(item);
            } else if (item.status === 'faulty') {
              itemf.push(item);
            }
          });

          //  console.log(itemn, '-->item itemn');
          setplatsListN(itemn);
          setplatsListO(itemo);
          setplatsListF(itemf);

          setplatsList(data.payload.plantsData);

          setplantStatus(data.payload.plantStatus);
          setstatsData(data.payload.statsData);
          setisLoading(false);
        } else if (data?.payload === undefined) {
          ShowToast('error', 'Try Again Later.');
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

  // useEffect(() => {
  //   //Runs only on the first render
  //   getPlantHomeData();
  // }, []);

  useEffect(() => {
    // Orientation.lockToPortrait();
    const unsubscribe = navigation.addListener('focus', () => {
      // dispatchc(Services.getScreenChecks()).then(data => {
      //   setLoading(false);
      //   if (data.payload.transaction_done) {
      //     settransaction_done(true);
      //     //  navigation.navigate('Home');
      //   }
      // });
      getPlantHomeData();
    });
    return unsubscribe;
  }, [navigation]);

  const DATA = [
    {
      id: 1,
      companyName: 'GREEN FOOD ',
      OrderId: 'R000011',
      Quantity: '3000',
      Total: '221130',
    },
    {
      id: 2,
      companyName: 'TRIPPLE-EM ',
      OrderId: 'R000012',
      Quantity: '3100',
      Total: '223190',
    },
    {
      id: 3,
      companyName: 'GUJRANWALA FOOD ',
      OrderId: 'R000013',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 4,
      companyName: '4cPackages',
      OrderId: 'R000014',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 5,
      companyName: 'HILMTON FOOD ',
      OrderId: 'R000015',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 6,
      companyName: '4cPackages',
      OrderId: 'R000014',
      Quantity: '3200',
      Total: '2241810',
    },
    {
      id: 7,
      companyName: 'HILMTON FOOD ',
      OrderId: 'R000015',
      Quantity: '3200',
      Total: '2241810',
    },
  ];
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <HeaderCommon
        //    leftIcon={menu}
        //  leftCallBack={() => Alert.alert('Add Pressed')}
        showLeftIcon={false}
        title={'Plants Home'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        searchIcon={search}
        searchPhrase={SearchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <View style={{ backgroundColor: colors.fetWhite }}>
        <Pressable
          onPress={() => plantAddNavFUn()}
          style={{
            alignItems: 'flex-end',
            marginTop: rfSpacing.xxl,
            marginHorizontal: rfSpacing['4xl'],
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: rfSpacing.xl,
              color: colors.secondary,
            }}>
            Add New Plant
          </Text>
        </Pressable>

        <View style={styles.btnWrap}>
          <Pressable
            onPress={() => setActiveDiv('All')}
            style={ActiveDiv === 'All' ? styles.activeDiv : styles.inActiveDiv}>
            <Text style={styles.btnText}>{plantStatus?.total_platns || 0}</Text>
            <Text style={styles.btnTitle}>All</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveDiv('Normal')}
            style={
              ActiveDiv === 'Normal' ? styles.activeDiv : styles.inActiveDiv
            }>
            <Text style={styles.btnText}>
              {plantStatus?.normal_plants || 0}
            </Text>
            <Text style={styles.btnTitle}>Normal</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveDiv('Faulty')}
            style={
              ActiveDiv === 'Faulty' ? styles.activeDiv : styles.inActiveDiv
            }>
            <Text style={styles.btnText}>{plantStatus?.faulty || 0}</Text>
            <Text style={styles.btnTitle}>Faulty</Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveDiv('Offline')}
            style={
              ActiveDiv === 'Offline' ? styles.activeDiv : styles.inActiveDiv
            }>
            <Text style={styles.btnText}>{plantStatus?.offline || 0}</Text>
            <Text style={styles.btnTitle}>Offline</Text>
          </Pressable>
        </View>

        <View style={styles.statWrap}>
          <View style={styles.statDivBorder}>
            <Text style={styles.valueStats}>
              {statsData?.totalInstallCapacity || 0} KW
            </Text>
            <Text style={styles.btnTitle}>Total Install Capacity</Text>
          </View>
          <View style={styles.statDivBorder}>
            <Text style={styles.valueStats}>
              {statsData?.yieldToday || 0} KWh
            </Text>
            <Text style={styles.btnTitle}>Yield Today</Text>
          </View>
        </View>

        <View style={styles.statWrap2}>
          <View style={styles.statDivBorder}>
            <Text style={styles.valueStats}>
              {statsData?.currentPower || 0} KW
            </Text>
            <Text style={styles.btnTitle}>Current Power</Text>
          </View>
          <View style={styles.statDivBorder}>
            <Text style={styles.valueStats}>
              {statsData?.fuelSaveToday || 0} ltr
            </Text>
            <Text style={styles.btnTitle}>Fuel Save Today</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 160 }}>
        <PlantListCard
          ActiveDiv={ActiveDiv}
          plantDetailNavFUn={plantDetailNavFUn}
          item={platsList}
          platsListN={platsListN}
          platsListF={platsListF}
          platsListO={platsListO}
        />
      </View>
    </>
  );
};
