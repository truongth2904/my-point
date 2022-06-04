import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {scale, scaleHeight} from '../../../../utils';
import {TextAndIcon, CustomButton} from '../../../../components';
import colors from '../../../../constants/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';

const SheetAdditionalInfo = ({refRBSheet, additionalInfo,tags}) => {
  return (
    <RBSheet
      enableOverScroll={false}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={false}
      height={scaleHeight(450)}
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
          text={'Additional Info'}
          Icon={Entypo}
          textIcon={'cross'}
        />

        <Text style={styles.textAdd}>Serving Time (±)</Text>
        <TextInput
          multiline
          value={additionalInfo.servingTime.toString()}
          style={styles.textInput}
        />
        <Text style={styles.textAdd}>Nutrition Facts</Text>
        <TextInput
          multiline
          value={additionalInfo.NutritionFacts.toString()}
          style={styles.textInput}
        />
        <Text style={styles.textAdd}>Tags</Text>
        <TextInput
          multiline
          value={tags.toString()}
          style={styles.textInput}
        />
        <View style={styles.viewButton}>
          <CustomButton isPress={true} title={'Save Info'} />
        </View>
      </View>
    </RBSheet>
  );
};

export default React.memo(SheetAdditionalInfo);

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(20),
    paddingBottom: scaleHeight(20),
  },
  textTitleScreen: {
    fontSize: FONT_SIZE.X_LARGE,
  },
  textAdd: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.gray,
    marginVertical: scaleHeight(15),
  },
  textInput: {
    borderBottomColor: colors.gray,
    borderBottomWidth: scale(1),
    color: colors.black,
  },
  viewButton: {
    marginVertical: scaleHeight(30),
  },
});
