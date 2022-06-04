import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import NewRecipeView from './newRecipe.view';
import WithCheckConnection from '../../HOC/withCheckConnection';
const NewRecipeContainer = ({navigation}) => {
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const [listDropDown, setItems] = useState([
    {label: 'Western (5)', value: 'western'},
    {label: 'Quick Lunch (8)', value: 'quickLunch'},
    {label: 'Veggies (9)', value: 'veggies'},
  ]);
  return (
    <NewRecipeView listDropDown={listDropDown} onPressBack={onPressBack} />
  );
};

export default WithCheckConnection(NewRecipeContainer);
