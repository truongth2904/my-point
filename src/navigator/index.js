import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationServices} from '../utils';
import LoginContainer from '../screens/auth/login/login.container';
import HomeContainer from '../screens/home/home.container';
import SignUpContainer from '../screens/auth/signUp/signUp.container';
import BottomTab from './bottomTab';
import {screens} from '../constants/screenNames';
import SettingScreen from './../screens/setting/setting.container';
import EditProfile from './../screens/edit_profile/edit.container';
import DetailContainer from '../screens/detail/detail.container';
import EditRecipeContainer from '../screens/edit_recipe/editRecipe.container';
import MyRecipeContainer from '../screens/browse_my_recipe/myRecipe.container';
import OtherUserProfile from '../screens/other_users_profile/otherUserProfile.container';
import NewRecipe from '../screens/new_recipe/newRecipe.container';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StackFlow = createStackNavigator();
const MyStack = () => {
  return (
    <StackFlow.Navigator initialRouteName="Splash">
      <StackFlow.Screen
        name={screens.LOGIN_SCREEN}
        component={LoginContainer}
        options={{headerShown: false}}
      />
      <StackFlow.Screen
        name={screens.SIGN_UP_SCREEN}
        component={SignUpContainer}
        options={{headerShown: false}}
      />

      <StackFlow.Screen
        name={screens.BOTTOM_TAB}
        component={BottomTab}
        options={{headerShown: false}}
      />

      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.HOME_SCREEN}
        component={HomeContainer}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.SETTING_SCREEN}
        component={SettingScreen}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.EDIT_PROFILE}
        component={EditProfile}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.DETAIL_SCREEN}
        component={DetailContainer}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.EDIT_RECIPE}
        component={EditRecipeContainer}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.MY_RECIPE}
        component={MyRecipeContainer}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.OTHER_USER_PROFILE}
        component={OtherUserProfile}
      />
      <StackFlow.Screen
        options={{headerShown: false}}
        name={screens.NEW_RECIPE}
        component={NewRecipe}
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
