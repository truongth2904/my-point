import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import EditProfileView from './edit.view';
import {EmailContext} from '../../index';
import WithCheckConnection from '../../HOC/withCheckConnection';

const EditProfileContainer = ({navigation}) => {
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <EmailContext.Consumer>
      {context => (
        <EditProfileView emailUser={context.value} onPressBack={onPressBack} />
      )}
    </EmailContext.Consumer>
  );
};

export default WithCheckConnection(EditProfileContainer);
