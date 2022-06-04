import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: scale(25),
    paddingTop: scaleHeight(25),
    backgroundColor: colors.white,
    flex: 1,
  },
  textTitleScreen: {
    fontFamily: FONT_FAMILY.BOLD,
    color: colors.black,
    fontSize: FONT_SIZE.X_LARGE,
    marginTop: scaleHeight(20),
  },
  recipeNormal: {
    flexDirection: 'row',
    marginTop: scaleHeight(25),
  },
  imageNormal: {
    width: scale(65),
    height: scale(65),
    borderRadius: scale(10),
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
  gallery: {
    marginTop: scaleHeight(20),
    padding: scale(15),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 10,
    borderRadius: scale(10),
  },
  imageGallery: {
    height: scaleHeight(125),
    width: scale(295),
  },
  viewImagesGallery: {
    alignItems: 'center',
    marginTop: scaleHeight(20),
    marginBottom: scaleHeight(7),
  },
  imageGallerySmall: {
    width: scale(94),
    height: scale(94),
  },
  viewImageSmall: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageSmallEnd: {
    width: scale(103),
    height: scale(94),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNumber: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.V_LARGE,
    color: colors.black,
  },
  imageOpacity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  ingredients: {
    marginTop: scaleHeight(20),
    padding: scale(15),
    backgroundColor: colors.white,
    shadowColor: colors.black,
    elevation: 10,
    borderRadius: scale(10),
  },
  imageSpice: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  viewFlatListSpice: {
    marginTop: scaleHeight(20),
  },
  textAmount: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  viewAmount: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSpices: {
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    marginTop: scaleHeight(20),
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
  viewHowToCookItem: {
    flexDirection: 'row',
    marginTop: scaleHeight(25),
  },
  textHowToCookItem: {
    marginLeft: scale(15),
    color: colors.black,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    width: scale(260),
  },
  viewAdditionalInfo: {
    paddingTop: scaleHeight(20),
  },
  viewAdditional: {
    flexDirection: 'row',
    marginTop: scaleHeight(20),
  },
  textServing: {
    width: scale(130),
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.gray,
  },
  textAdd: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    fontSize: FONT_SIZE.NORMAL,
    width: scale(190),
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
  viewIngredientsText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
export default styles;
