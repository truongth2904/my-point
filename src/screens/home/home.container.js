import React, {useCallback, useContext, useEffect, useState} from 'react';
import listRecipe from '../../data/recipes';
import typeRecipes from '../../data/typeRecipes';
import {screens} from './../../constants/screenNames';
import HomeView from './home.view';
import {EmailContext} from '../../index';
import WithCheckConnection from '../../HOC/withCheckConnection';

const HomeContainer = ({navigation, route}) => {
  const [listRecipes, setListRecipes] = useState(listRecipe);
  const [modalVisible, setModalVisible] = useState(false);
  const [listCookBook, setListCookBook] = useState(typeRecipes);
  const context = useContext(EmailContext);
  const onPressItemRecipe = useCallback(({item}) => {
    navigation.navigate(screens.DETAIL_SCREEN, {itemRecipe: item});
  }, []);
  const onPressUserItem = useCallback(({item}) => {
    navigation.navigate(screens.OTHER_USER_PROFILE, {user: item.user});
  }, []);
  const onPressSaveButton = useCallback(() => {
    setModalVisible(true);
  }, []);
  const onPressCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);
  useEffect(() => {
    context.setValue(route?.params?.email);
  }, []);
  return (
    <HomeView
      onPressCloseModal={onPressCloseModal}
      listCookBook={listCookBook}
      onPressSaveButton={onPressSaveButton}
      modalVisible={modalVisible}
      onPressUserItem={onPressUserItem}
      onPressItemRecipe={onPressItemRecipe}
      listRecipes={listRecipes}
    />
  );
};

export default WithCheckConnection(HomeContainer);
