import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import DetailView from './detail.view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {table} from '../../constants/asyncName';

const DetailContainer = ({navigation, route}) => {
  const id = route?.params?.ID || null;
  const name = route?.params?.name || null;
  const [gpaSubject, setGpaSubject] = useState(0);
  const [visibleModal, setVisibleModal] = useState(false);
  const [valueAddPoint, setValueAddPoint] = useState('0');
  const [coefficient, setCoefficient] = useState(0);

  const [score1, setScore1] = useState([]);
  const [score2, setScore2] = useState([]);
  const [score3, setScore3] = useState([]);

  function add(accumulator, a) {
    return accumulator + a;
  }

  const getSubject = async () => {
    const subject_ = await AsyncStorage.getItem(id);
    const subject = JSON.parse(subject_);
    setScore1(subject.score1 || []);
    setScore2(subject.score2 || []);
    setScore3(subject.score3 || []);

    const score_1 = subject.score1 || [];
    const score_2 = subject.score2 || [];
    const score_3 = subject.score3 || [];

    let total =
      score_1.reduce(add, 0) +
      score_2.reduce(add, 0) * 2 +
      score_3.reduce(add, 0) * 3;

    let divisor =
      (score_1.length == 0 ? 0 : score_1.length) +
      (score_2.length == 0 ? 0 : score_2.length) * 2 +
      (score_3.length == 0 ? 0 : score_3.length) * 3;

    let totalSubject = (total / divisor).toFixed(2);
    setGpaSubject(totalSubject);

    const data = JSON.parse(await AsyncStorage.getItem(table.LIST_SUBJECTS));
    data.map(async subject_item => {
      if (subject_item.id == id) {
        subject_item.pointAVG = divisor == 0 ? null : totalSubject;
        await AsyncStorage.setItem(table.LIST_SUBJECTS, JSON.stringify(data));
      }
    });
  };

  const onPressBack = () => {
    navigation.goBack();
  };
  const onChangeTextAddPoint = text => {
    setValueAddPoint(text);
  };

  const onPressAddPoint = () => {
    setValueAddPoint('');
    setVisibleModal(true);
  };

  const onPressCancelModal = () => {
    setVisibleModal(false);
  };

  const onPressAddPointModal = async () => {
    if (valueAddPoint) {
      let point = parseFloat(valueAddPoint) + 1 - 1;

      if (point >= 0 && point <= 10) {
        switch (coefficient) {
          // điểm hệ số 1
          case 0:
            const subject1 = JSON.parse(await AsyncStorage.getItem(id));
            let newScore1;
            if (subject1.score1 == null) {
              newScore1 = [point];
            } else {
              newScore1 = [...subject1.score1, point];
            }
            const newSubject1 = {
              score1: newScore1,
              score2: subject1.score2,
              score3: subject1.score3,
            };
            await AsyncStorage.setItem(id, JSON.stringify(newSubject1));
            break;
          // điểm hệ số 2
          case 1:
            const subject2 = JSON.parse(await AsyncStorage.getItem(id));
            let newScore2;
            if (subject2.score2 == null) {
              newScore2 = [point];
            } else {
              newScore2 = [...subject2.score2, point];
            }
            const newSubject2 = {
              score1: subject2.score1,
              score2: newScore2,
              score3: subject2.score3,
            };
            await AsyncStorage.setItem(id, JSON.stringify(newSubject2));
            break;
          // điểm hệ số 3
          case 2:
            const subject3 = JSON.parse(await AsyncStorage.getItem(id));
            let newScore3;
            if (subject3.score3 == null) {
              newScore3 = [point];
            } else {
              newScore3 = [...subject3.score3, point];
            }
            const newSubject3 = {
              score1: subject3.score1,
              score2: subject3.score2,
              score3: newScore3,
            };
            await AsyncStorage.setItem(id, JSON.stringify(newSubject3));
            break;
          default:
            break;
        }
        getSubject();
        setVisibleModal(false);
      } else {
        ToastAndroid.show(
          'Vui lòng nhập điểm trong khoảng từ 0 > 10!',
          ToastAndroid.LONG,
        );
      }
    } else {
      ToastAndroid.show('Bạn chưa nhập thông tin!', ToastAndroid.LONG);
    }
  };

  const deletePoint1 = async (point, index) => {
    score1.splice(index, 1);
    const subject = JSON.parse(await AsyncStorage.getItem(id));

    const newSubject1 = {
      score1: score1,
      score2: subject.score2,
      score3: subject.score3,
    };
    await AsyncStorage.setItem(id, JSON.stringify(newSubject1));
    getSubject();
  };
  const deletePoint2 = async (point, index) => {
    score2.splice(index, 1);
    const subject = JSON.parse(await AsyncStorage.getItem(id));

    const newSubject1 = {
      score1: subject.score1,
      score2: score2,
      score3: subject.score3,
    };
    await AsyncStorage.setItem(id, JSON.stringify(newSubject1));
    getSubject();
  };
  const deletePoint3 = async (point, index) => {
    score3.splice(index, 1);
    const subject = JSON.parse(await AsyncStorage.getItem(id));

    const newSubject1 = {
      score1: subject.score1,
      score2: subject.score2,
      score3: score3,
    };
    await AsyncStorage.setItem(id, JSON.stringify(newSubject1));
    getSubject();
  };

  useEffect(() => {
    getSubject();
  }, []);

  return (
    <DetailView
      deletePoint1={deletePoint1}
      deletePoint2={deletePoint2}
      deletePoint3={deletePoint3}
      setCoefficient={setCoefficient}
      coefficient={coefficient}
      onPressAddPointModal={onPressAddPointModal}
      onPressCancelModal={onPressCancelModal}
      valueAddPoint={valueAddPoint}
      onChangeText={onChangeTextAddPoint}
      visible={visibleModal}
      onPressAddPoint={onPressAddPoint}
      onPressBack={onPressBack}
      name={name}
      score3={score3}
      score2={score2}
      score1={score1}
      gpaSubject={gpaSubject}
    />
  );
};

export default DetailContainer;
