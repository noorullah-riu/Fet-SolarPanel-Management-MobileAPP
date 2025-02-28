import React, {useState, useContext, useEffect, useRef} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import HeaderCommon from '../../../../ui/HeaderCommon';
import back from '../../../../assets/_Header/back-button.png';
import spacing from '../../../../theme/spacing';
import colors from '../../../../theme/colors';
import BlueButton from '../../../../ui/BlueButton';

import {useDispatch, useSelector} from 'react-redux';
import * as Services from '../../../../networking/auth/Services';
import EcomContext from '../../../../contextApi/DataProvider';
import ShowToast from '../../../../ui/Toast';
import Loader from '../../../../ui/Loader';
export const UpdatePass = props => {
  const {plant, setplant, Data}: any = useContext(EcomContext);
  const [isLoading, setisLoading] = useState(false);
  const [oldPass, setoldPass] = useState('');
  const [newPass, setnewPass] = useState('');

  const dispatch = useDispatch();

  const deleteAccount = async () => {
    setisLoading(true);
    let obj = {
      Data: Data,
      oldPass: oldPass,
      newPass: newPass,
    };
    try {
      dispatch(Services.update_profileP(obj)).then(data => {
        if (data.payload) {
          console.log(data.payload, 'from update profile');
          ShowToast('success', 'Updated Success');
          props.navigation.goBack();
          setisLoading(false);
        }else{
          ShowToast('error', 'Failed, Please try later.');
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
    //Runs only on the first render
    //  getPlantHomeData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HeaderCommon
        showLeftIcon={true}
        leftIcon={back}
        leftCallBack={() => props.navigation.goBack()}
        title={'Update Password'}
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
          <Text style={styles.usernameText}>Enter Old Password {oldPass}</Text>
        </View>
        <View style={styles.inputEmail}>
          <TextInput
            style={styles.inputStyle}
            //    onBlur={handleBlur('UserCode')}
            onChangeText={setoldPass}
            value={oldPass}
            //   placeholder="User Name/Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.h70}>
          <Text style={styles.usernameText}>Enter New Password {newPass}</Text>
        </View>
        <View style={styles.inputEmail}>
          <TextInput
            style={styles.inputStyle}
            //   onBlur={handleBlur('UserCode')}
            onChangeText={setnewPass}
            value={newPass}
            //   placeholder="User Name/Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.lognDiv}>
          <BlueButton
            text="Submit"
            //     disabled={!isValid}
            onPress={deleteAccount}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
    marginTop: spacing['xl'],
    // flex: 1,
  },
  lognDiv: {
    height: spacing['7xl'],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing['7xl'],
  },
  divP: {
    // justifyContent: 'center',
    // aligItems: 'center',
    flex: 3,
  },
  divP1: {
    flex: 0.5,
  },
  inputStyle: {
    color: colors.activity_Date,
    fontSize: spacing.xl,

    borderBottomColor: colors.font_grey,
    borderBottomWidth: spacing['3xxs'],
  },
});
