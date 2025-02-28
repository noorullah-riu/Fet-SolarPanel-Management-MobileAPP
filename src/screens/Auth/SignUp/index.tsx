import React, {useState, useContext, useEffect} from 'react';
import EcomContext from '../../../contextApi/DataProvider';
import {Image, Alert, View, Text, TextInput, Pressable} from 'react-native';
import ScrollAuth from '../../../ui/ScrollAuth';
import BlueButton from '../../../ui/BlueButton';
import Loader from '../../../ui/Loader';
import ShowToast from '../../../ui/Toast';
import styles from './styles';

import {LoginImages} from '../../../ui/Images';

import * as Animatable from 'react-native-animatable';
import HeaderCommon from '../../../ui/HeaderCommon';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../navigation/AuthNavigator';
import {RouteProp} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';

import * as Services from '../../../networking/auth/Services';
import * as yup from 'yup';
import {Formik} from 'formik';
import {storeDataLogin} from '../../../storage';

interface userData {
  $id: string;
  active: null;
  cityName: string;
  companyName: string;
  contactPersonName: string;
  contactPersonPhone: string;
  costCenter: string;
  countryName: string;
  email: string;
  empId: number;
  id: number;
  landLineNumber: number;
  managerCode: number;
  managerId: number;
  managerName: null;
  mobilenumber: string;
  name: string;
  ocrCode4: string;
  pymntGroup: string;
  salePerName: string;
  salePersonCode: number;
  sapUserCOde: string;
  slpCode: number;
  stateName: string;
  territory: number;
  typeOfUser: string;
  u_Dsd_EmpCode: string;
  u_MUPassword: string;
  u_Qut_Series: string;
  u_SECode: string;
  u_Series: string;
  u_Whs: string;
  userManagerId: number;
}
type FormData = {
  UserCode: string;
  Password: string;
};

interface Props {
  route: ScreenRouteProp;
  navigation: ScreenProp;
}

type ScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;
type ScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;

// export const Login = ({navigation}: any) => {
export const SignUp: React.FC<Props> = props => {
  const {setUserAuthentic}: any = useContext(EcomContext);
  const [hidePass, setHidePass] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const accountTxt = `Already have an account?`;
  const signUpTxt = ` Login`;
  const Name = ` Full Name`;
  const passwordText = `Password`;
  const codeText = `Access Code`;
  const username = `Email`;
  const singinTxt = 'Create A New Account';

  const signUpValidationSchema = yup.object().shape({
    FullName: yup.string().required('Email Address is Required'),
    Email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    Password: yup
      .string()
      .min(4, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  const dispatch = useDispatch();

  const submtBtn = async (values?: any) => {
    //  setisLoading(true);
    const data = {
      Name: values.FullName,
      Email: values.Email,
      Password: values.Password,
    };

    dispatch(Services.postSignUp(data)).then(Data => {
      if (Data?.payload?.message) {
        //   console.log(data, '---response');
        ShowToast('error', Data?.payload?.message);
        setisLoading(false);
        props.navigation.navigate('Login');
      } else {
        ShowToast('error', 'Register failed try differnet credantials ');
        setisLoading(false);
      }
      setisLoading(false);
    });
  };


  if (isLoading) {
    return <Loader />;
  }
  return (
    <ScrollAuth>
      <HeaderCommon
        showLeftIcon={true}
        leftIcon={LoginImages.back}
        leftCallBack={() => props.navigation.goBack()}
        title={'Sign Up'}
        isAddOrPdfHeader={false}
        //    addOrPdfIcon={add}
        //     addOrPdfPress={() => Alert.alert('Add Pressed')}
        isSearchHeader={false}
        //    searchIcon={search}
        //    searchPhrase={SearchPhrase}
        //    setSearchPhrase={setSearchPhrase}
      />
      <View style={styles.container}>
        <View style={styles.h20}></View>

        <View style={styles.h60}>
          <Text style={styles.singinTxt}>{singinTxt}</Text>
        </View>

        <View style={styles.h70}>
          <Text style={styles.usernameText}>{Name}</Text>
        </View>

        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{FullName: '', Email: '', Password: ''}}
          onSubmit={values => submtBtn(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <View style={styles.inputEmail}>
                <TextInput
                  style={styles.inputStyle}
                  onBlur={handleBlur('FullName')}
                  onChangeText={handleChange('FullName')}
                  value={values.FullName}
                  placeholder="Jhon Doe"
                  keyboardType="email-address"
                />
              </View>

              {errors.FullName && touched.FullName && (
                <Animatable.View animation="bounceInRight">
                  <Text style={styles.errorEmail}>{errors.FullName}</Text>
                </Animatable.View>
              )}
              <View style={styles.h70}>
                <Text style={styles.passwordText}>{username}</Text>
              </View>
              <View style={styles.inputEmail}>
                <TextInput
                  style={styles.inputStyle}
                  onBlur={handleBlur('Email')}
                  onChangeText={handleChange('Email')}
                  value={values.Email}
                  placeholder="Email@gmail.com"
                  keyboardType="email-address"
                />
              </View>

              {errors.Email && touched.Email && (
                <Animatable.View animation="bounceInRight">
                  <Text style={styles.errorEmail}>{errors.Email}</Text>
                </Animatable.View>
              )}
              <View style={styles.h70}>
                <Text style={styles.passwordText}>{passwordText}</Text>
              </View>
              <View style={styles.inputPassword}>
                <View style={styles.f9}>
                  <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange('Password')}
                    value={values.Password}
                    placeholder="Password"
                    onBlur={handleBlur('Password')}
                    secureTextEntry={hidePass ? true : false}
                  />
                </View>

                <View style={styles.eyeDiv}>
                  {hidePass ? (
                    <Pressable
                      style={styles.h20w20}
                      onPress={() => setHidePass(!hidePass)}>
                      <Image
                        style={styles.h20w20}
                        source={LoginImages.eyeVisible}
                      />
                    </Pressable>
                  ) : (
                    <Pressable
                      style={styles.h20w20}
                      onPress={() => setHidePass(!hidePass)}>
                      <Image
                        style={styles.h20w20}
                        source={LoginImages.eyeHide}
                      />
                    </Pressable>
                  )}
                </View>
              </View>

              {errors.Password && touched.Password && (
                <Animatable.View animation="bounceInRight">
                  <Text style={styles.errorPass}>{errors.Password}</Text>
                </Animatable.View>
              )}

              <View style={styles.lognDiv}>
                <BlueButton
                  text="Sign Up"
                  //     disabled={!isValid}
                  onPress={handleSubmit}
                />
              </View>
            </>
          )}
        </Formik>

        <View style={styles.h20}></View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.h50f2}>
            <Text style={styles.signupTxt}>{accountTxt}</Text>
          </View>
          <Pressable
            onPress={() => props.navigation.navigate('Login')}
            style={styles.h50f1}>
            <Text style={styles.signupTxtEnd}>{signUpTxt}</Text>
          </Pressable>
        </View>
      </View>
    </ScrollAuth>
  );
};
