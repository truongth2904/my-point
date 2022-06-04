import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';
import {scale, scaleHeight} from '../../../../utils';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {editDirection} from './../../../../assets/images';
import {
  IconAndButton,
  TextAndIcon,
  RadioButton,
  IconAndText,
  ButtonDashed,
  CustomButton,
  Line,
} from '../../../../components';

const SheetHowToCook = ({refRBSheet, listHowToCook}) => {
  return (
    <RBSheet
      enableOverScroll={false}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={scaleHeight(600) + scaleHeight(listHowToCook.length * 50)}
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
          text={'Edit Directions'}
          Icon={Entypo}
          textIcon={'cross'}
        />
        <ImageBackground imageStyle={styles.viewImage} source={editDirection}>
          <View style={styles.viewImage}>
            <TouchableOpacity style={styles.viewIconButton}>
              <Feather
                style={styles.iconButton}
                name="edit-2"
                size={20}
                color={colors.white}
              />
              <Text style={styles.textIconButton}>Edit Annotations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewIconButton}>
              <MaterialCommunityIcons
                style={styles.iconButton}
                name="delete-outline"
                size={20}
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View style={styles.viewUpload}>
          <Feather name="upload" size={22} color={colors.black} />
          <Text style={styles.textUpload}>The Making of Waffle.mp4</Text>
        </View>
        <Line />
        {listHowToCook.map((item, index) => (
          <View style={styles.viewStep}>
            <View style={styles.viewHowToCookItem}>
              <Text style={styles.borderNumber}>{index + 1}</Text>
              <Text style={styles.textHowToCookItem}>{item}</Text>
            </View>
            <Feather
              style={styles.iconButton}
              name="edit-2"
              size={20}
              color={colors.black}
            />
          </View>
        ))}

        <ButtonDashed text={'Add Directions'} style={styles.buttonDashed} />
        <CustomButton isPress={true} title={'Save Directions'} />
      </View>
    </RBSheet>
  );
};

export default React.memo(SheetHowToCook);

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(20),
    paddingBottom: scaleHeight(20),
  },
  textTitleScreen: {
    fontSize: FONT_SIZE.X_LARGE,
  },
  viewImage: {
    width: '100%',
    height: scaleHeight(165),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: scale(15),
    marginTop: scaleHeight(30),
  },
  viewIconButton: {
    borderRadius: scale(8),
    borderColor: colors.white,
    borderWidth: scale(1),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(30),
    padding: scale(4),
    marginRight: scale(15),
  },
  textIconButton: {
    marginLeft: scale(5),
    color: colors.white,
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.SMALL,
  },
  textUpload: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
    marginLeft: scale(10),
  },
  viewUpload: {
    flexDirection: 'row',
    marginVertical: scaleHeight(10),
  },
  viewHowToCookItem: {
    flexDirection: 'row',
  },
  howToCook: {
    marginTop: scaleHeight(20),
    padding: scale(15),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 10,
    borderRadius: scale(10),
  },
  borderNumber: {
    color: colors.success,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    borderColor: colors.success,
    borderWidth: scale(1),
    borderRadius: scale(50),
    width: scale(20),
    height: scale(20),
    textAlign: 'center',
  },
  textHowToCookItem: {
    marginLeft: scale(15),
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    width: scale(260),
  },
  textHowToCookItemGray: {
    marginLeft: scale(15),
    color: colors.gray,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    width: scale(260),
  },
  viewStep: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(25),
  },
  viewIconStep: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconEditStep: {
    marginLeft: scale(10),
  },
  buttonDashed: {
    marginVertical: scaleHeight(20),
  },
});
