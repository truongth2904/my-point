import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';

const ItemSubject = ({item, onPress, onLongPress}) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={styles.view}>
      <Text style={styles.text}>{item?.name}</Text>
      {item?.pointAVG ? (
        <Text style={styles.textPoint}>{item?.pointAVG || '10'}</Text>
      ) : (
        <Text style={styles.textPointNull}>Chưa có điểm</Text>
      )}
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
    backgroundColor: colors.green,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textPointNull: {
    color: colors.white,
    marginTop: scaleHeight(10),
    fontWeight: 'bold',
    fontSize: scale(18),
  },
  textPoint: {
    color: colors.red,
    marginTop: scaleHeight(10),
    fontWeight: 'bold',
    fontSize: scale(18),
  },
});
