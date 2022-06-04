import React, {useRef} from 'react';
import {Animated, Image, ScrollView, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {scale} from '../../utils';
import {logoScratch} from '../../assets/images';
import {ModalSave} from '../../components';
import colors from '../../constants/colors';
import ItemRecipe from './components/ItemRecipe';
import styles from './home.style';

const HomeView = ({
  listRecipes,
  onPressItemRecipe,
  onPressUserItem,
  modalVisible,
  onPressSaveButton,
  listCookBook,
  onPressCloseModal,
}) => {
  const xOffset = useRef(new Animated.Value(0)).current;
  const transitionAnimation = index => {
    return {
      opacity: xOffset.interpolate({
        inputRange: [
          (index - 2) * scale(315),
          (index - 1) * scale(315),
          index * scale(315),
        ],
        outputRange: [0.6, 1, 0.6],
      }),
    };
  };

  const dataListRecipe = [
    {id: 'space-left'},
    ...listRecipes,
    {id: 'space-right'},
  ];

  const renderItem = ({item}) => {
    if (!item.name) {
      return <View style={styles.viewItem} />;
    } else {
      return (
        <ItemRecipe
          style={transitionAnimation(item.id)}
          onPressSaveButton={onPressSaveButton}
          onPressUser={() => onPressUserItem({item})}
          onPressItemRecipe={() => onPressItemRecipe({item})}
          item={item}
        />
      );
    }
  };

  return (
    <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <ModalSave
          onPressClose={onPressCloseModal}
          listCookBook={listCookBook}
          modalVisible={modalVisible}
        />
        <View style={styles.viewHeader}>
          <Image style={styles.imageHeader} source={logoScratch} />
          <View style={styles.aboutIconHeader}>
            <Fontisto name="bell" color={colors.black} size={scale(22)} />
            <MaterialCommunityIcons
              name="email-outline"
              color={colors.black}
              size={scale(22)}
            />
          </View>
        </View>
        <Animated.FlatList
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToAlignment="start"
          snapToInterval={scale(315)}
          disableIntervalMomentum
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: xOffset}}}],
            {useNativeDriver: true},
          )}
          renderItem={renderItem}
          data={dataListRecipe}
        />
      </View>
    </ScrollView>
  );
};

export default React.memo(HomeView);
