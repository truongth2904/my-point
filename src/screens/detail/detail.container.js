import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import DetailView from './detail.view';
import WithCheckConnection from '../../HOC/withCheckConnection';

const DetailContainer = ({navigation, route}) => {
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const recipe = route?.params?.itemRecipe;

  return <DetailView recipe={recipe} onPressBack={onPressBack} />;
};

export default WithCheckConnection(DetailContainer);
