import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HomeView from './home.view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {table} from '../../constants/asyncName';
const list = [
  {
    name: 'Toán',
    id: '1',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Vật Lý',
    id: '2',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Hóa Học',
    id: '3',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Sinh Học',
    id: '4',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Tin Học',
    id: '5',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Ngữ Văn',
    id: '6',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Lịch Sử',
    id: '7',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Địa Lý',
    id: '8',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Ngoại Ngữ',
    id: '9',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'GDCD',
    id: '10',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
  {
    name: 'Công Nghệ',
    id: '11',
    pointMouth: -1,
    point1: [],
    point2: [],
    point3: -1,
  },
];

const HomeContainer = ({navigation}) => {
  const [fullNameUser, setFullNameUser] = useState('');
  const [listSubjects, setListSubjects] = useState([]);
  const [gpa, setGPA] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const onPressItemSubject = item => {
    console.log(item);
  };

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem(table.LIST_SUBJECTS);

      if (data) {
        setListSubjects(JSON.parse(data));
      } else {
        await AsyncStorage.setItem(table.LIST_SUBJECTS, JSON.stringify(list));
        setListSubjects(list);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <HomeView
      onPressItemSubject={onPressItemSubject}
      gpa={gpa}
      listSubjects={listSubjects}
      fullNameUser={fullNameUser}
    />
  );
};

export default HomeContainer;
