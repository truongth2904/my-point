import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import {ItemCategory, ItemProfiles, ItemTrending} from './components';
import {ModalSearch} from '../../components';
import styles from './search.style';

const listCategory = [
  {id: '1', name: 'Potato'},
  {id: '2', name: 'Banana'},
  {id: '3', name: 'Tomato'},
  {id: '4', name: 'Banana'},
  {id: '5', name: 'Pumpkin'},
  {id: '6', name: 'Mango'},
];

const SearchView = ({
  chooseCategory,
  onPressCategory,
  textSearch,
  onPressApplyFilter,
  modalVisible,
  onPressFilter,
  listUserProfiles,
  onPressItemRecipe,
  listTrendingRecipe,
  listRecipeICanMakeWith,
  onPressItemProfile,
}) => {
  const renderUserProfile = ({item}) => (
    <ItemProfiles onPress={() => onPressItemProfile({item})} item={item} />
  );

  return (
    <ScrollView style={styles.viewScroll}>
      <ModalSearch
        modalVisible={modalVisible}
        onPressApplyFilter={onPressApplyFilter}
      />
      <View style={styles.view}>
        <View style={styles.search}>
          <View style={styles.textSearch}>
            <Feather name="search" size={scale(20)} color={colors.black} />
            <TextInput
              placeholderTextColor={colors.black}
              onChangeText={textSearch.changeText}
              value={textSearch.value}
              placeholder="Search recipe, people, or tag"
            />
          </View>
          <TouchableOpacity onPress={onPressFilter}>
            <AntDesign
              name="menuunfold"
              size={scale(20)}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>

        {!textSearch.value ? (
          <React.Fragment>
            <Text style={styles.textTrending}>Trending Recipes</Text>
            <View style={styles.listTrendingRecipes}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item}) => (
                  <ItemTrending
                    onPress={() => onPressItemRecipe({item})}
                    item={item}
                  />
                )}
                data={listTrendingRecipe}
              />
            </View>
            <View style={styles.viewLine} />

            <Text style={styles.textTrending}>What can I make with..</Text>
            <View style={styles.listTrendingRecipes}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({item}) => (
                  <ItemCategory
                    onPress={() => onPressCategory({item})}
                    chooseId={chooseCategory}
                    item={item}
                  />
                )}
                data={listCategory}
              />
            </View>
            <View style={styles.listTrendingRecipes}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({item}) => (
                  <ItemTrending
                    onPress={() => onPressItemRecipe({item})}
                    item={item}
                  />
                )}
                data={listRecipeICanMakeWith}
              />
            </View>
          </React.Fragment>
        ) : (
          <View>
            <View style={styles.viewTextSearchRecipes}>
              <Text style={styles.textTrending}>Recipes</Text>
              <TouchableOpacity>
                <Text style={styles.textTrendingShowAll}>show all (200+)</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.listTrendingRecipes}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <ItemTrending
                    onPress={() => onPressItemRecipe({item})}
                    item={item}
                  />
                )}
                data={listTrendingRecipe}
              />
            </View>
            <View style={styles.viewLine} />
            <View style={styles.viewTextSearchRecipes}>
              <Text style={styles.textTrending}>Profiles</Text>
              <TouchableOpacity>
                <Text style={styles.textTrendingShowAll}>show all (42+)</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewProfileList}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => item.id}
                renderItem={renderUserProfile}
                data={listUserProfiles}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default React.memo(SearchView);
