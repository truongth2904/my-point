import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Alert, BackHandler, LogBox} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Root from './src';
import {nameTokens} from './src/constants/screenNames';

const App = () => {
  LogBox.ignoreLogs([
    'ViewPropTypes will be removed',
    'ColorPropType will be removed',
  ]);

  useEffect(() => {
    AsyncStorage.getItem(nameTokens.NAME_TOKEN).then(res =>
      SplashScreen.hide(),
    );
    // SplashScreen.hide();
  }, []);
  
  return <Root />;
};

export default App;
