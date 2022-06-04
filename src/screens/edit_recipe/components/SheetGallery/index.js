import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';
import {scale, scaleHeight} from '../../../../utils';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  RadioButton,
  IconAndText,
  ButtonDashed,
  CustomButton,
  TextAndIcon,
} from '../../../../components';

const SheetGallery = ({refRBSheet, galleries}) => {
  const [chooseImage, setChooseImage] = useState(0);
  const [isTickSetAsCover, setIsTickSetAsCover] = useState(true);
  const onPressItemImage = index => {
    setChooseImage(index);
  };

  const onPressSetAsCover = () => {
    setIsTickSetAsCover(!isTickSetAsCover);
  };

  return (
    <RBSheet
      enableOverScroll={false}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={scaleHeight(470)}
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
          text={'Edit Gallery'}
          Icon={Entypo}
          textIcon={'cross'}
        />

        <View style={styles.viewTextImage}>
          <Text style={styles.textImage}>Images (8)</Text>
          <TouchableOpacity>
            <Text style={styles.textImageViewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewFlatList}>
          <FlatList
            keyExtractor={item => item.toString()}
            horizontal
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => onPressItemImage(index)}
                style={[
                  index == chooseImage
                    ? styles.viewImageListBorder
                    : styles.viewImageList,
                ]}>
                <Image style={styles.imageListGallery} source={item} />
              </TouchableOpacity>
            )}
            data={galleries}
          />
        </View>
        <RadioButton
          onPressTick={onPressSetAsCover}
          isTick={isTickSetAsCover}
          style={styles.radioButton}
          text={'Set as Cover'}
        />
        <IconAndText
          styleText={styles.textRemove}
          Icon={MaterialCommunityIcons}
          nameIcon={'delete-outline'}
          text={'Remove from Cookbook'}
        />

        <ButtonDashed
          style={styles.viewButtonUpload}
          text={'Upload Images or Open Camera'}
        />
        <CustomButton isPress={true} title={'Save Gallery'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(SheetGallery);

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(20),
    paddingBottom: scaleHeight(20),
    flex: 1,
  },
  textTitleScreen: {
    fontSize: FONT_SIZE.X_LARGE,
  },
  textImage: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  textImageViewAll: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.success,
  },
  viewTextImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(25),
  },
  imageListGallery: {
    borderRadius: scale(5),
    width: scale(120),
    height: scale(75),
  },
  viewImageList: {
    width: scale(130),
    height: scaleHeight(85),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(5),
  },
  viewImageListBorder: {
    borderColor: colors.success,
    borderWidth: scale(2),
    width: scale(130),
    height: scaleHeight(85),
    borderRadius: scale(5),
    justifyContent: 'center',
    alignItems: 'center',
    margin: scale(5),
  },
  viewFlatList: {
    marginTop: scaleHeight(15),
  },
  radioButton: {
    marginTop: scaleHeight(20),
    marginBottom: scaleHeight(20),
  },
  textRemove: {
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  viewButtonUpload: {
    marginVertical: scaleHeight(20),
  },
});
