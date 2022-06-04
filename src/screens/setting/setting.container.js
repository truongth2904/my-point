import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import SettingView from './setting.view';
import {screens, nameTokens} from '../../constants/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WithCheckConnection from '../../HOC/withCheckConnection';
const SettingContainer = ({navigation}) => {
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const logOut = useCallback(() => {
    AsyncStorage.removeItem(nameTokens.NAME_TOKEN);
    navigation.reset({
      index: 0,
      routes: [{name: screens.LOGIN_SCREEN}],
    });
  }, []);
  return <SettingView logOut={logOut} onPressBack={onPressBack} />;
};

export default WithCheckConnection(SettingContainer);
