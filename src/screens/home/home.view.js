import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import styles from './home.style';
import ItemSubject from './components/ItemSubject';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import ModalAddSubject from '../../components/ModalAddSubject';

const HomeView = ({
  listSubjects,
  onPressItemSubject,
  isLoading,
  onPressAddContainer,
  valueTextAddSubject,
  onChangeTextValue,
  getListSubjects,
  pointGPA,
  deleteSubject,
}) => {
  const [visible, setVisible] = useState(false);
  const [buttonAdd, setButtonAdd] = useState(true);

  const renderItem = ({item, index}) => {
    const onPressItem = () => {
      onPressItemSubject(item);
    };
    const onLongPress = () => {
      deleteSubject(item, index);
    };
    return (
      <ItemSubject
        onLongPress={onLongPress}
        onPress={onPressItem}
        item={item}
      />
    );
  };
  const renderEmpty = () => (
    <>
      <Text style={styles.textEmpty}>Bạn chưa có môn học nào!</Text>
    </>
  );

  const onPressShowModal = () => {
    setVisible(true);
    setButtonAdd(false);
  };
  const onPressCancel = () => {
    setVisible(false);
    setButtonAdd(true);
  };
  const onPressAdd = () => {
    onPressAddContainer();
    setVisible(false);
    setButtonAdd(true);
  };
  const onRefresh = () => {
    getListSubjects();
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titleScreen}>TRANG CHỦ</Text>

      <Text style={styles.textGPA}>{pointGPA == 'NaN' ? '-:-' : pointGPA}</Text>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <FlatList
            ListEmptyComponent={renderEmpty}
            columnWrapperStyle={styles.flatListItem}
            numColumns={2}
            renderItem={renderItem}
            data={listSubjects}
            refreshControl={
              <RefreshControl
                tintColor={'rgb(241,197,18)'}
                removeClippedSubviews={true}
                refreshing={false}
                onRefresh={onRefresh}
              />
            }
          />
        </>
      )}
      <ModalAddSubject
        value={valueTextAddSubject}
        onChangeTextValue={onChangeTextValue}
        onPressCancel={onPressCancel}
        onPressAdd={onPressAdd}
        modalVisible={visible}
      />
      {buttonAdd && (
        <TouchableOpacity
          onPress={onPressShowModal}
          style={styles.viewButtonAdd}>
          <MaterialIcons name="add" size={scale(25)} color={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeView;
