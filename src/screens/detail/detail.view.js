import React from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../components/Header';
import ModalAddPoint from '../../components/ModalAddPoint';
import colors from '../../constants/colors';
import {scale} from '../../utils';
import styles from './detail.style';

const DetailView = ({
  gpaSubject,
  name,
  onPressBack,
  onPressAddPoint,
  visible,
  valueAddPoint,
  onChangeText,
  onPressCancelModal,
  onPressAddPointModal,
  setCoefficient,
  coefficient,
  score3,
  score2,
  score1,
  deletePoint1,
  deletePoint2,
  deletePoint3,
}) => {
  const renderItemPointScore1 = ({item, index}) => {
    const onPressItemDelete = () => {
      Alert.alert('Thông báo!', `Bạn chắc chắn muốn xóa điểm ${item} này?`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => deletePoint1(item, index)},
      ]);
    };
    return (
      <View style={styles.viewItemPoint}>
        <Text style={styles.textPoint}>{item}</Text>
        <TouchableOpacity onPress={onPressItemDelete}>
          <Octicons name="trash" size={scale(20)} color={colors.green} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItemPointScore2 = ({item, index}) => {
    const onPressItemDelete = () => {
      Alert.alert('Thông báo!', `Bạn chắc chắn muốn xóa điểm ${item} này?`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => deletePoint2(item, index)},
      ]);
    };
    return (
      <View style={styles.viewItemPoint}>
        <Text style={styles.textPoint}>{item}</Text>
        <TouchableOpacity onPress={onPressItemDelete}>
          <Octicons name="trash" size={scale(20)} color={colors.green} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderItemPointScore3 = ({item, index}) => {
    const onPressItemDelete = () => {
      Alert.alert('Thông báo!', `Bạn chắc chắn muốn xóa điểm ${item} này?`, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => deletePoint3(item, index)},
      ]);
    };
    return (
      <View style={styles.viewItemPoint}>
        <Text style={styles.textPoint}>{item}</Text>
        <TouchableOpacity onPress={onPressItemDelete}>
          <Octicons name="trash" size={scale(20)} color={colors.green} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderEmpty = () => {
    return <Text style={styles.textNullPoint}>Không có dữ liệu</Text>;
  };

  return (
    <View style={styles.view}>
      <Header
        onPress={onPressAddPoint}
        onPressBack={onPressBack}
        title={name}
      />
      <View style={styles.view_View}>
        <View />
        <View style={styles.viewTextGPA}>
          <Text style={styles.textGPA}>
            {gpaSubject == 'NaN' ? '-:-' : gpaSubject}
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.viewPoint}>
          <Text style={styles.textTitlePoint}>{'Điểm hệ số 1:'}</Text>
          <FlatList
            ListEmptyComponent={renderEmpty}
            renderItem={renderItemPointScore1}
            data={score1}
          />
        </View>
        <View style={styles.viewPoint}>
          <Text style={styles.textTitlePoint}>{'Điểm hệ số 2:'}</Text>
          <FlatList
            ListEmptyComponent={renderEmpty}
            renderItem={renderItemPointScore2}
            data={score2}
          />
        </View>
        <View style={styles.viewPoint}>
          <Text style={styles.textTitlePoint}>{'Điểm hệ số 3:'}</Text>
          <FlatList
            ListEmptyComponent={renderEmpty}
            renderItem={renderItemPointScore3}
            data={score3}
          />
        </View>
      </View>

      <ModalAddPoint
        setCoefficient={setCoefficient}
        coefficient={coefficient}
        onPressAdd={onPressAddPointModal}
        onPressCancelModal={onPressCancelModal}
        onChangeText={onChangeText}
        value={valueAddPoint}
        visible={visible}
      />
    </View>
  );
};

export default DetailView;
