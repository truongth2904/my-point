import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Alert, BackHandler} from 'react-native';
import {screens} from '../constants/screenNames';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';

import HomeScreen from './../screens/home/home.container';
import UserScreen from './../screens/user_profile/user.container';
import SearchScreen from './../screens/search/search.container';

const Tab = createBottomTabNavigator();
function MyTabs({navigation}) {
  const handleBackButton = () => {
    if (navigation.isFocused()) {
      Alert.alert('SCRATCH', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
  }, []);

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: colors.success,
        tabBarShowLabel: false,
        tabBarStyle: {height: 90},
      })}
      initialRouteName={screens.HOME_SCREEN}>
      <Tab.Screen
        name={screens.SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name={screens.HOME_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
        name={screens.PROFILE_SCREEN}
        component={UserScreen}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
