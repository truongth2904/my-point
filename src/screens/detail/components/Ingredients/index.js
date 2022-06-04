import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {food2} from './../../../../assets/images';
import {scale, scaleHeight} from '../../../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import colors from '../../../../constants/colors';
import {food1} from './../../../../assets/images';
const dataIngredients = [
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
  {
    image: food2,
    text: 'cooking spray',
  },
];

const renderItem = ({item, index}) => {
  if (index > 4) {
    return;
  }
  if (index == 4) {
    return (
      <ImageBackground
        imageStyle={{borderRadius: scale(50)}}
        style={styles.imageSpice}
        source={item}>
        <View style={styles.viewAmount}>
          <Text style={styles.textAmount}>+5</Text>
        </View>
      </ImageBackground>
    );
  } else {
    return <Image style={styles.imageSpice} source={item} />;
  }
};
const Ingredients = ({ingredients}) => {
  const [listIngredients, setListIngredients] = useState([
    {name: 'Lemonade', image: food1},
    {name: 'Carrot', image: food1},
    {name: 'Corn', image: food1},
    {name: 'Tomato', image: food1},
    {name: 'Chili', image: food1},
  ]);
  return (
    <View style={styles.viewFlatListSpice}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={ingredients}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(Ingredients);

const styles = StyleSheet.create({
  view: {
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
  imageSpice: {
    width: scale(50),
    height: scale(50),
    marginRight: scale(10),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
