import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {scale, scaleHeight} from '../../../../utils';
import {FONT_FAMILY, FONT_SIZE} from './../../../../constants/fonts';
import colors from '../../../../constants/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ItemTextAndText, ButtonFunction} from '../../../../components';

const ItemRecipe = ({
  item,
  onPressItemRecipe,
  onPressUser,
  onPressSaveButton,
  style,
}) => {
  const [isLoveIcon, setIsLoveIcon] = useState(false);

  const onPressLoveIcon = () => {
    setIsLoveIcon(!isLoveIcon);
  };

  return (
    <Animated.View style={[styles.itemRecipe, style]}>
      <TouchableOpacity onPress={onPressItemRecipe} activeOpacity={0.5}>
        <Image style={styles.itemImage} source={item.images[0]} />
      </TouchableOpacity>

      <View style={styles.viewInfoRecipe}>
        <TouchableOpacity onPress={onPressUser}>
          <Image style={styles.itemImageUser} source={item.user.image} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressUser} style={styles.viewTextName}>
          <Text style={styles.textName}>{item.user.name}</Text>
          <Text style={styles.textTime}>
            {item.timePass} {'h ago'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemBottom}>
        <View style={styles.viewTextNameRecipe}>
          <Text style={styles.textName}>{item.name}</Text>
          <TouchableOpacity onPress={onPressLoveIcon}>
            {isLoveIcon ? (
              <FontAwesome name="heart" color={colors.redDefault} size={24} />
            ) : (
              <FontAwesome name="heart-o" color={colors.gray} size={24} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.itemDescription}>
          {item.description.substring(0, 100)}
          {'...'}
        </Text>

        <View style={styles.viewLikeComment}>
          <ItemTextAndText
            number1={item.likes}
            text1={'like'}
            number2={item.comments}
            text2={'comment'}
          />
          <ButtonFunction
            onPress={onPressSaveButton}
            Icon={Ionicons}
            nameIcon={'add'}
            text={'Save'}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default React.memo(ItemRecipe);

const styles = StyleSheet.create({
  itemRecipe: {
    width: scale(295),
    marginRight: scale(20),
    marginBottom: scaleHeight(10),
    backgroundColor: colors.white,
    borderRadius: scale(8),
    overflow: 'hidden',
    shadowColor: colors.black,
    elevation: 5,
  },
  itemImageUser: {
    width: scale(35),
    height: scale(35),
    margin: scale(15),
    marginRight: scale(10),
    borderRadius: scale(50),
  },
  viewTextName: {
    padding: scale(15),
  },
  textName: {
    fontFamily: FONT_FAMILY.BOLD,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.black,
  },
  textTime: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.SMALL,
    color: colors.gray,
  },
  itemImage: {
    width: scale(295),
    height: scale(395),
  },
  viewInfoRecipe: {
    position: 'absolute',
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: scale(295),
    opacity: 0.9,
  },
  viewTextNameRecipe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    color: colors.black,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: FONT_SIZE.MEDIUM,
  },
  itemDescription: {
    paddingTop: scale(10),
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.NORMAL,
    color: colors.gray,
  },
  itemBottom: {
    padding: scale(15),
  },
  viewLikeComment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(20),
    alignItems: 'center',
  },
});
