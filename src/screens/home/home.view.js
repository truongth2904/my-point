import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import styles from './home.style';
import ItemSubject from './components/ItemSubject';

const HomeView = ({gpa, listSubjects, fullNameUser, onPressItemSubject}) => {
  const renderItem = ({item}) => {

    const onPressItem = () => {
      onPressItemSubject(item);
    };

    return <ItemSubject onPress={onPressItem} item={item} />;
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titleScreen}>TRANG CHỦ</Text>

      <Text style={styles.textGPA}>{gpa}</Text>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={renderItem}
        data={listSubjects}
      />
    </View>
  );
};

export default HomeView;
