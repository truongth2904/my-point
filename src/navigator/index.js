import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationServices} from '../utils';
import HomeScreen from '../screens/home/home.container';
import {screens} from '../constants/screenNames';

const StackFlow = createStackNavigator();
const MyStack = () => {
  return (
    <StackFlow.Navigator initialRouteName="Splash">
      <StackFlow.Screen
        name={screens.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </StackFlow.Navigator>
  );
};

const AppContainer = props => {
  const routeNameRef = React.useRef();

  return (
    <NavigationContainer
      ref={NavigationServices.navigationRef}
      onReady={() => {
        routeNameRef.current =
          NavigationServices.navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={state => {}}>
      <MyStack />
    </NavigationContainer>
  );
};

export default AppContainer;
