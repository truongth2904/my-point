import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.white,
    padding: scale(25),
  },
  textTitleScreen: {
    fontFamily: FONT_FAMILY.BOLD,
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
    marginTop: scaleHeight(20),
  },
  viewImage: {
    borderWidth: scale(1),
    width: scale(60),
    height: scale(60),
    backgroundColor: 'red',
  },
  recipeNormal: {
    flexDirection: 'row',
    marginTop: scaleHeight(25),
  },
  imageNormal: {
    borderStyle: 'dashed',
    width: scale(65),
    height: scale(65),
    borderRadius: scale(10),
    borderColor: colors.black,
    borderWidth: scale(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeNormalRight: {
    marginLeft: scale(15),
    flex: 1,
    justifyContent: 'space-around',
  },
  textInputName: {
    padding: 0,
    margin: 0,
    marginBottom: scaleHeight(1),
    borderBottomColor: colors.gray,
    borderBottomWidth: scaleHeight(1),
    color: colors.black,
  },
  textRecipeName: {
    color: colors.gray,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
  },
  styleView: {
    shadowColor: colors.black,
    elevation: 3,
    marginTop: scaleHeight(20),
  },
  saveTo: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.grey,
    marginTop: scaleHeight(30),
    marginBottom: scaleHeight(10),
  },
  viewDropDown: {
    shadowColor: colors.black,
    elevation: 15,
    backgroundColor: colors.white,
    borderRadius: scale(10),
    flexDirection: 'row',
    padding: scale(15),
    justifyContent: 'space-between',
    width: scale(190),
    height: scaleHeight(50),
  },
  textDropDown: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  buttonBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleHeight(20),
  },
  buttonSave: {
    height: scaleHeight(50),
    width: scale(120),
  },
  iconButtonRemove: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: scaleHeight(30),
  },
});
export default styles;
