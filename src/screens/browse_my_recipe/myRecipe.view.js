import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {HeaderScreenText, Loading, ButtonBack} from '../../components';
import colors from '../../constants/colors';
import ItemFlatList from './components/ItemFlatList';
import styles from './myRecipe.style';
import ModalMyRecipe from '../../components/ModalMyRecipe';

const MyRecipeView = ({
  onPressItem,
  onPressBack,
  onPressNewRecipe,
  listDropDown,
  listRecipes,
  onRefreshData,
  onLoadMore,
  isFetching,
}) => {
  const renderItem = ({item}) => (
    <ItemFlatList onPress={() => onPressItem({item})} item={item} />
  );
  const [itemChoose, setItemChoose] = useState(listDropDown[0].value);
  const [visibleModal, setVisibleModal] = useState(false);

  const onPressDropDow = () => {
    setVisibleModal(true);
  };

  const onPressItemDropDow = ({item}) => {
    setItemChoose(item.value);
    setVisibleModal(false);
  };

  return (
    <View style={styles.view}>
      <ButtonBack onPressBack={onPressBack} text={'Back to My Profile'} />
      <View style={styles.viewHeader}>
        <HeaderScreenText
          onPressButton={onPressNewRecipe}
          title={'My Recipes'}
          textIcon={'+ Add New'}
        />
      </View>

      <TouchableOpacity
        onPress={onPressDropDow}
        activeOpacity={0.8}
        style={styles.viewDropDown}>
        <Text style={styles.textDropDown}>{listDropDown[0].label}</Text>
        <Entypo color={colors.black} name="chevron-down" size={20} />
      </TouchableOpacity>

      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={listRecipes.data}
        ListFooterComponent={
          isFetching ? (
            <View style={styles.loading}>
              <Loading />
            </View>
          ) : null
        }
        refreshControl={
          <RefreshControl
            tintColor={'rgb(241,197,18)'}
            removeClippedSubviews={true}
            refreshing={false}
            onRefresh={onRefreshData}
          />
        }
        onEndReached={onLoadMore}
      />
      <ModalMyRecipe
        onPressItem={onPressItemDropDow}
        itemChoose={itemChoose}
        isVisible={visibleModal}
        listCookBook={listDropDown}
      />
    </View>
  );
};

export default React.memo(MyRecipeView);
