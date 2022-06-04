import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import MyRecipeView from './myRecipe.view';
import {screens} from './../../constants/screenNames';
import listData from '../../data/recipes';
import WithCheckConnection from '../../HOC/withCheckConnection';

const PAGE = 6;
const getDataFlatList = (skip = 0, take = 6) => {
  return new Promise((resolve, reject) => {
    if (skip > listData.length) {
      resolve([]);
    } else {
      setTimeout(() => {
        resolve(listData.slice(skip, take));
      }, 2000);
    }
  });
};

const MyRecipeContainer = ({navigation}) => {
  const [listDropDown, setItems] = useState([
    {label: 'Western (5)', value: 'western'},
    {label: 'Quick Lunch (8)', value: 'quickLunch'},
    {label: 'Veggies (9)', value: 'veggies'},
  ]);
  const [listRecipes, setListRecipes] = useState({data: [], skip: 0});
  const [isFetching, setIsFetching] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(true);

  const onPressItem = useCallback(({item}) => {
    navigation.navigate(screens.EDIT_RECIPE, {itemRecipe: item});
  }, []);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const onPressNewRecipe = useCallback(() => {
    navigation.navigate(screens.NEW_RECIPE);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    setIsFetching(true);
    getDataFlatList()
      .then(dataResponse => {
        if (!!dataResponse.length && isMounted) {
          setListRecipes({data: dataResponse, skip: PAGE});
        }
      })
      .finally(() => setIsFetching(false));
    return () => setIsMounted(false);
  }, []);
  const onRefreshData = () => {
    setIsFetching(true);
    setListRecipes({data: [], skip: 0});
    getDataFlatList()
      .then(dataResponse => {
        if (!!dataResponse.length && isMounted) {
          setListRecipes({data: dataResponse, skip: PAGE});
        }
      })
      .finally(() => setIsFetching(false));
  };

  const onLoadMore = () => {
    setIsFetching(true);
    getDataFlatList(listRecipes.skip, listRecipes.skip + PAGE)
      .then(dataResponse => {
        if (!!dataResponse.length && isMounted) {
          setListRecipes({
            data: [...listRecipes.data, ...dataResponse],
            skip: listRecipes.skip + PAGE,
          });
        }
      })
      .finally(() => setIsFetching(false));
  };

  return (
    <MyRecipeView
      isFetching={isFetching}
      listRecipes={listRecipes}
      onRefreshData={onRefreshData}
      onLoadMore={onLoadMore}
      listDropDown={listDropDown}
      onPressNewRecipe={onPressNewRecipe}
      onPressBack={onPressBack}
      onPressItem={onPressItem}
    />
  );
};

export default WithCheckConnection(MyRecipeContainer);
