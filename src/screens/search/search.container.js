import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import SearchView from './search.view';
import useFormInput from './../../hooks/useFormInput';
import listUserProfiles from '../../data/listUserProfiles';
import {screens} from '../../constants/screenNames';
import listRecipe from '../../data/recipes';
import listRecipeICanMakeWith from '../../data/recipes';
import WithCheckConnection from '../../HOC/withCheckConnection';

const SearchContainer = ({navigation}) => {
  const [chooseCategory, setIsChooseCategory] = useState('1');
  const textSearch = useFormInput('');
  const [modalVisible, setModalVisible] = useState(false);

  const onPressCategory = useCallback(({item}) => {
    setIsChooseCategory(item.id);
  }, []);
  const onPressApplyFilter = useCallback(() => {
    setModalVisible(false);
  }, []);
  const onPressFilter = useCallback(() => {
    setModalVisible(true);
  }, []);
  const onPressItemProfile = useCallback(({item}) => {
    navigation.navigate(screens.OTHER_USER_PROFILE, {user: item});
  }, []);
  const onPressItemRecipe = useCallback(({item}) => {
    navigation.navigate(screens.DETAIL_SCREEN, {itemRecipe: item});
  }, []);

  return (
    <SearchView
      onPressItemProfile={onPressItemProfile}
      listRecipeICanMakeWith={listRecipeICanMakeWith}
      listTrendingRecipe={listRecipe}
      onPressItemRecipe={onPressItemRecipe}
      listUserProfiles={listUserProfiles}
      onPressFilter={onPressFilter}
      modalVisible={modalVisible}
      onPressApplyFilter={onPressApplyFilter}
      textSearch={textSearch}
      chooseCategory={chooseCategory}
      onPressCategory={onPressCategory}
    />
  );
};

export default WithCheckConnection(SearchContainer);
