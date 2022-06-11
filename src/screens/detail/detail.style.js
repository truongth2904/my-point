import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {FONT_SIZE} from '../../constants/fonts';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.white,
    flex: 1,
    padding: scale(10),
  },
  textGPA: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 22,
    padding: scale(5),
    textAlign: 'center',
    overflow: 'hidden',
  },
  viewTextGPA: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(10),
    width: scale(60),
    height: scale(60),
    borderRadius: scale(100),
    backgroundColor: colors.gray,
  },
  view_View: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textTitlePoint: {
    color: colors.black,
  },
  viewPoint: {
    height: scaleHeight(200),
  },
  textPoint: {
    color: colors.black,
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  textNullPoint: {
    color: colors.gray,
    textAlign: 'center',
    marginTop: scaleHeight(50),
  },
  viewItemPoint: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: scaleHeight(5),
    borderRadius: scale(5),
    borderColor: colors.green,
    borderWidth: 1,
    padding: scale(5),
    paddingHorizontal: scale(10),
  },
});
export default styles;
