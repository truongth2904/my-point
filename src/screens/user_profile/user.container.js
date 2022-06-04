import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import UserView from './user.view';
import {screens} from '../../constants/screenNames';
import infoUser from '../../data/user';
import recipes from '../../data/recipes';
import WithCheckConnection from '../../HOC/withCheckConnection';
import listData from '../../data/recipes';

const PAGE = 6;
const UserContainer = ({navigation}) => {
  const [routes] = React.useState([
    {key: 'first', title: 'Recipes', number: recipes.length},
    {key: 'second', title: 'Saved', number: recipes.length},
    {key: 'third', title: 'Following', number: recipes.length},
  ]);
  const onPressButtonSetting = useCallback(() => {
    navigation.navigate(screens.SETTING_SCREEN);
  }, []);
  const onPressEditProfile = useCallback(() => {
    navigation.navigate(screens.EDIT_PROFILE);
  }, []);

  const [listRecipes, setListRecipes] = useState([]);
  const [listSaved, setListSaved] = useState([]);
  const [listFollowing, setListFollowing] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getDataFlatList = (skip = 0, take = 10) => {
    return new Promise((resolve, reject) => {
      if (skip > listData.length) {
        resolve([]);
      } else {
        setTimeout(() => {
          resolve(listData.slice(skip, take));
        }, 1500);
      }
    });
  };

  useEffect(() => {
    getDataFlatList().then(dataResponse => {
      if (!!dataResponse.length) {
        setListRecipes({data: dataResponse, skip: PAGE});
      }
    });
    setTimeout(() => {
      setIsFetching(true);
    }, 1500);
  }, []);
  return (
    <UserView
      isFetching={isFetching}
      listRecipes={listRecipes}
      infoUser={infoUser}
      onPressButtonSetting={onPressButtonSetting}
      onPressEditProfile={onPressEditProfile}
      routes={routes}
    />
  );
};

export default WithCheckConnection(UserContainer);
