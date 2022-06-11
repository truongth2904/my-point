import {StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import {scale, scaleHeight} from '../../utils';

const styles = StyleSheet.create({
  titleScreen: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: scaleHeight(10),
    fontSize: scaleHeight(18),
    backgroundColor: colors.green,
    paddingBottom: scaleHeight(10),
  },
  view: {
    flex: 1,
    backgroundColor: 'white',
  },
  textGPA: {
    color: colors.red,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: scaleHeight(10),
    fontSize: scaleHeight(25),
    padding: scale(5),
  },
  flatListItem: {
    justifyContent: 'space-between',
  },
  textEmpty: {
    color: colors.gray,
    marginTop: scaleHeight(20),
    textAlign: 'center',
  },
  viewButtonAdd: {
    backgroundColor: colors.green,
    padding: scale(5),
    width: scale(60),
    height: scale(60),
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: scale(30),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
