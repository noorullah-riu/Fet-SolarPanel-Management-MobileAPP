import React,{useState,useContext} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import HeaderCommon from '../../../ui/HeaderCommon';
import back from '../../../assets/_Header/back-button.png';
import spacing from '../../../theme/spacing';
import colors from '../../../theme/colors';
import BlueButton from '../../../ui/BlueButton';
import EcomContext from '../../../contextApi/DataProvider';
import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../networking/auth/Services';
import ShowToast from '../../../ui/Toast';
import Loader from '../../../ui/Loader';
export const AddPlant = props => {
  const {plant, setplant, Data}: any = useContext(EcomContext);

  const [AC, setAC] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const dispatch = useDispatch();

  const updatePlant = async () => {
    setisLoading(true);
    let obj = {
      Data: Data,
      AC: AC,
    };
    try {
      dispatch(Services.addPlant(obj)).then(data => {
        if (data.payload) {
          console.log(data.payload, 'from update profile');
          ShowToast('success', 'Updated Success');
          props.navigation.goBack();
          setisLoading(false);
        } else {
          ShowToast('error', 'Failed, Please try later.');
          setisLoading(false);
        }
      });
    } catch (err) {
      ShowToast('error', 'failed.');
      setisLoading(false);
    } finally {
      //  setisLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HeaderCommon
        showLeftIcon={true}
        leftIcon={back}
        leftCallBack={() => props.navigation.goBack()}
        title={'Add Plants'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />
      <View style={styles.divP1}></View>
      <View style={styles.divP}>
        <View style={styles.h70}>
          <Text style={styles.usernameText}>Enter Access Code</Text>
        </View>
        <View style={styles.inputEmail}>
          <TextInput
            style={styles.inputStyle}
            //   onBlur={handleBlur('UserCode')}
              onChangeText={setAC}
              value={AC}
         //   placeholder="User Name/Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.lognDiv}>
          <BlueButton
            text="Submit"
            //     disabled={!isValid}
           onPress={updatePlant}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyling: {
    background: '#0000FF',
  },
  inputEmail: {
    height: spacing['6xl'],
    marginLeft: spacing['4xl'],
    marginRight: spacing['4xl'],
    justifyContent: 'center',
  },
  usernameText: {
    color: colors.heading_black,
    fontSize: spacing.xl,
    fontWeight: '500',
    marginLeft: spacing['4xl'],
  },
  h70: {
    marginTop: spacing['4xl'],
    // flex: 1,
  },
  lognDiv: {
    height: spacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing['4xl'],
  },
  divP: {
    // justifyContent: 'center',
    // aligItems: 'center',
    flex: 3,
  },
  divP1: {
    flex: 1,
  },
  inputStyle: {
    color: colors.activity_Date,
    fontSize: spacing.xl,

    borderBottomColor: colors.font_grey,
    borderBottomWidth: spacing['3xxs'],
  },
});
