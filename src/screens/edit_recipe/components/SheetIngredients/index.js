import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonDashed, CustomButton, TextAndIcon} from '../../../../components';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {scale, scaleHeight} from '../../../../utils';

const Item = ({item}) => (
  <View style={styles.viewItem}>
    <Text style={styles.textItem}>
      {item.quality} {item.name}
    </Text>
    <Feather color={colors.black} name="edit-2" size={22} />
  </View>
);

const SheetIngredients = ({refRBSheet, ingredients}) => {
  return (
    <RBSheet
      enableOverScroll={true}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={scaleHeight(500)}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        draggableIcon: {
          backgroundColor: 'transparent',
        },
        container: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <View style={styles.view}>
        <TextAndIcon
          onPressIcon={() => refRBSheet.current.close()}
          colorIcon={colors.black}
          styleText={styles.textTitleScreen}
          text={'Edit Ingredients'}
          Icon={Entypo}
          textIcon={'cross'}
        />
        <View style={styles.viewWriteIngredient}>
          <Text style={styles.textWriteIngredient}>Write Ingredient</Text>
          <View style={styles.viewIconDelete}>
            <MaterialCommunityIcons
              style={styles.iconDelete}
              color={colors.redDefault}
              name="delete"
              size={22}
            />
            <Feather color={colors.success} name="edit-2" size={22} />
          </View>
        </View>

        <TextInput style={styles.textInput} />
        <FlatList
          keyExtractor={item => item.id}
          renderItem={({item}) => <Item item={item} />}
          data={ingredients}
        />
        <ButtonDashed style={styles.viewButtonUpload} text={'Add Ingredient'} />
        <CustomButton isPress={true} title={'Save Ingredients'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(SheetIngredients);

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(20),
    paddingBottom: scaleHeight(20),
  },
  textTitleScreen: {
    fontSize: FONT_SIZE.X_LARGE,
  },
  textRemove: {
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  viewButtonUpload: {
    marginVertical: scaleHeight(20),
  },
  viewIconDelete: {
    flexDirection: 'row',
  },
  textWriteIngredient: {
    color: colors.gray,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  viewWriteIngredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(25),
  },
  iconDelete: {
    marginRight: scale(25),
  },
  textInput: {
    marginTop: scaleHeight(15),
    borderBottomColor: colors.success,
    borderBottomWidth: scale(1),
    color: colors.black,
    marginBottom: scaleHeight(15),
  },
  textItem: {
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(30),
  },
});
