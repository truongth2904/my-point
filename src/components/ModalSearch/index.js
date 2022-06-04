import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, memo} from 'react';
import colors from '../../constants/colors';
import {scale, scaleHeight} from '../../utils';
import TextAndIcon from '../TextAndIcon';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomButton from '../CustomButton';

const ModalSearch = ({modalVisible, onPressApplyFilter}) => {
  const [itemChoose, setItemChoose] = useState(1);
  const [textSearch, setTextSearch] = useState('');
  const [valueIngredients, setValueIngredients] = useState(8);
  const [min1, setMin1] = useState(0);
  const [min2, setMin2] = useState(0);
  const [listReSearch, setListReSearch] = useState([
    {name: '298 recipes', id: '0'},
    {name: '78 profiles', id: '1'},
    {name: '326 tags', id: '2'},
  ]);
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.view}>
        <View style={styles.viewContent}>
          <View style={styles.search}>
            <View style={styles.textSearch}>
              <Feather name="search" size={scale(20)} color={colors.black} />
              <TextInput
                onChangeText={textSearch.changeText}
                value={textSearch.value}
                placeholder="Search recipe, people, or tag"
              />
            </View>
            <TouchableOpacity>
              <AntDesign
                name="menuunfold"
                size={scale(20)}
                color={colors.success}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewBottom}>
            <Text style={styles.titleSearch}>Search Filter</Text>
            <>
              <View style={styles.viewIngredients}>
                <Text style={styles.textIngredients}>Ingredients</Text>
                <Text style={styles.numberIngredients}>{valueIngredients}</Text>
              </View>
              <MultiSlider
                selectedStyle={{
                  backgroundColor: colors.success,
                }}
                trackStyle={{
                  height: scaleHeight(4),
                }}
                markerStyle={{
                  backgroundColor: colors.success,
                  width: scaleHeight(15),
                  height: scaleHeight(15),
                }}
                sliderLength={scale(240)}
                max={200}
                onValuesChange={value => setValueIngredients(value)}
              />
            </>
            <>
              <View style={styles.viewIngredients}>
                <Text style={styles.textIngredients}>Serving Time</Text>
                <Text style={styles.numberIngredients}>
                  {min1} - {min2} mins
                </Text>
              </View>
              <MultiSlider
                onValuesChange={value => setMin1(value)}
                sliderLength={scale(240)}
                max={200}
                isMarkersSeparated={true}
                customMarkerLeft={e => {
                  return <Text>{e.currentValue}</Text>;
                }}
                customMarkerRight={e => {
                  return <Text>{e.currentValue + 10}</Text>;
                }}
              />
            </>
            <Text style={styles.titleSearch}>Search for</Text>
            <FlatList
              numColumns={2}
              renderItem={({item}) => (
                <Text
                  style={[
                    styles.textReSearch,
                    item.id == '0'
                      ? {backgroundColor: colors.success}
                      : {color: colors.success},
                  ]}>
                  {item.name}
                </Text>
              )}
              data={listReSearch}
            />
            <View style={styles.viewButton}>
              <CustomButton
                onPress={onPressApplyFilter}
                title={'Apply Filter'}
                isPress={true}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalSearch);

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContent: {
    backgroundColor: colors.white,
    width: scale(300),
    height: scaleHeight(500),
    borderRadius: scale(10),
  },
  textSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: scale(10),
    paddingHorizontal: scale(15),
    shadowColor: colors.black,
    elevation: 15,
  },
  titleSearch: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
  viewBottom: {
    margin: scale(30),
  },
  viewIngredients: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleHeight(20),
  },
  textIngredients: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  numberIngredients: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.gray,
  },
  textReSearch: {
    margin: scale(7.5),
    padding: scale(5),
    borderRadius: scale(15),
    color: colors.white,
    borderColor: colors.success,
    borderWidth: scale(2),
    textAlign: 'center',
  },
  viewButton: {
    marginTop: scaleHeight(30),
  },
});
