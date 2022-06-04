import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import Loading from '../../../components/Loading';
import {validateEmail} from '../../../helpers/validate';
import WithCheckConnection from '../../../HOC/withCheckConnection';
import useFormInput from '../../../hooks/useFormInput';
import {nameTokens, screens} from './../../../constants/screenNames';
import LoginView from './login.view';

const LoginContainer = ({navigation, route}) => {
  const email = useFormInput('');
  const pass = useFormInput('');
  const [textDangerEmail, setTextDangerEmail] = useState('');
  const [isLoading, setIdLoading] = useState(true);

  let accessToken;
  const getAsyncStorage = async () => {
    try {
      accessToken = await AsyncStorage.getItem(nameTokens.NAME_TOKEN);
      if (!!accessToken) {
        const user = JSON.parse(accessToken);

        navigation.replace(screens.BOTTOM_TAB, {
          screen: screens.HOME_SCREEN,
          params: {email: user.email},
        });
        setIdLoading(false);
      } else {
        setIdLoading(false);
      }
    } catch (error) {
      setIdLoading(false);
    }
  };

  useEffect(() => {
    email.changeText(route?.params?.email);
  }, [navigation]);

  useEffect(() => {
    getAsyncStorage();
  }, []);

  const onPressCreateAccount = useCallback(() => {
    navigation.navigate(screens.SIGN_UP_SCREEN);
  }, []);

  const onPressButtonLogin = () => {
    let check = false;
    if (!validateEmail(email.value)) {
      setTextDangerEmail('Email is wrong format!');
      check = true;
    } else {
      setTextDangerEmail('');
    }

    if (!check) {
      AsyncStorage.setItem(
        nameTokens.NAME_TOKEN,
        JSON.stringify({email: email.value, pass: pass.value}),
      );
      navigation.replace(screens.BOTTOM_TAB, {
        screen: screens.HOME_SCREEN,
        params: {email: email.value},
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <LoginView
          isPress={!!email.value && !!pass.value}
          email={email}
          textDangerEmail={textDangerEmail}
          pass={pass}
          onPressCreateAccount={onPressCreateAccount}
          onPressButtonLogin={onPressButtonLogin}
        />
      )}
    </>
  );
};

export default WithCheckConnection(LoginContainer);
