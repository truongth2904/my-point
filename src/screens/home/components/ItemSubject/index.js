import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, scaleHeight} from '../../../../utils';

const arrColor = [
  'red',
  'blue',
  'black',
  'green',
  'pink',
  'grey',
  'coral',
  'gold',
  'teal',
  'maroon',
];

const ItemSubject = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.view,
        {backgroundColor: arrColor[Math.floor(Math.random() * 10)]},
      ]}>
      <Text style={styles.text}>{item?.name}</Text>
    </TouchableOpacity>
  );
};

export default ItemSubject;

const styles = StyleSheet.create({
  view: {
    height: scaleHeight(90),
    width: scale(150),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
