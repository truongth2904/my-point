import {StyleSheet, Text, View, ToastAndroid, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeView from './home.view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {table} from '../../constants/asyncName';
import {screens} from '../../constants/screenNames';
import uuid from 'react-native-uuid';
const HomeContainer = ({navigation, route}) => {
  const [listSubjects, setListSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [valueTextAdd, setValueTextAdd] = useState('');
  const [pointGPA, setPointGPA] = useState(0);

  const getListSubjects = () => {
    setIsLoading(true);
    setPointGPA(0);
    setTimeout(async () => {
      setListSubjects([]);
      const data = JSON.parse(await AsyncStorage.getItem(table.LIST_SUBJECTS));
      setListSubjects(data);

      if (data) {
        let total = 0;
        let divisor = 0;
        data.map(subject => {
          total += parseFloat(subject.pointAVG) || null;
          if (!(subject.pointAVG == null)) {
            divisor++;
          }
        });
        setPointGPA((total / divisor).toFixed(2));
      }

      setIsLoading(false);
    }, 1000);
  };

  const onChangeTextValue = text => {
    setValueTextAdd(text);
  };

  const onPressAddContainer = async () => {
    if (valueTextAdd) {
      const data = JSON.parse(await AsyncStorage.getItem(table.LIST_SUBJECTS));
      const ID = uuid.v4();
      newSubject = {id: ID, name: valueTextAdd, pointAVG: null};
      newPoint = {score1: null, score2: null, score3: null};

      if (data) {
        data.push(newSubject);
        await AsyncStorage.setItem(table.LIST_SUBJECTS, JSON.stringify(data));
      } else {
        await AsyncStorage.setItem(
          table.LIST_SUBJECTS,
          JSON.stringify([newSubject]),
        );
      }
      await AsyncStorage.setItem(ID, JSON.stringify(newPoint));
      ToastAndroid.show('Đã thêm môn học thành công!', ToastAndroid.LONG);
      getListSubjects();
    } else {
      ToastAndroid.show('Bạn chưa nhập thông tin!', ToastAndroid.LONG);
    }
  };

  const onPressItemSubject = item => {
    navigation.navigate(screens.DETAIL_SCREEN, {ID: item.id, name: item.name});
  };

  const deleteSubject = (subject, index) => {
    Alert.alert('Thông báo!', `Bạn muốn xóa môn ${subject.name} ?`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'OK',
        onPress: async () => {
          const data = JSON.parse(
            await AsyncStorage.getItem(table.LIST_SUBJECTS),
          );

          data.splice(index, 1);
          await AsyncStorage.setItem(table.LIST_SUBJECTS, JSON.stringify(data));
          getListSubjects();
        },
      },
    ]);
  };

  useEffect(() => {
    getListSubjects();
  }, [navigation, route]);

  return (
    <HomeView
      deleteSubject={deleteSubject}
      pointGPA={pointGPA}
      getListSubjects={getListSubjects}
      onPressItemSubject={onPressItemSubject}
      onChangeTextValue={onChangeTextValue}
      onPressAddContainer={onPressAddContainer}
      isLoading={isLoading}
      listSubjects={listSubjects}
    />
  );
};

export default HomeContainer;
