import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import EditRecipeView from './editRecipe.view';
import WithCheckConnection from '../../HOC/withCheckConnection';

const EditRecipeContainer = ({navigation,route}) => {
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  const recipe = route?.params?.itemRecipe;

  return <EditRecipeView recipe={recipe} onPressBack={onPressBack} />;
};

export default WithCheckConnection(EditRecipeContainer);
