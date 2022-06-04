import {StyleSheet} from 'react-native';
import {scale, scaleHeight} from '../../utils';
import {FONT_FAMILY, FONT_SIZE} from './../../constants/fonts';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  viewHeader: {
    marginHorizontal: scale(30),
    marginTop: scale(35),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: scaleHeight(40),
  },
  aboutIconHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(70),
  },
  imageHeader: {
    width: scale(80),
    height: scale(30),
    resizeMode: 'contain',
  },
  view: {
    flex: 1,
    backgroundColor: colors.white,
  },
  viewItem: {
    width: scale(40),
  },
  viewPlaceholder: {
    width: scale(295),
    height: scaleHeight(100),
  },
});

export default styles;
