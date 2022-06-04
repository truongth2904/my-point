import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {scale, scaleHeight} from '../../../../utils';
import colors from '../../../../constants/colors';
import {FONT_FAMILY, FONT_SIZE} from '../../../../constants/fonts';
import {screens} from '../../../../constants/screenNames';
import listData from '../../../../data/recipes';
import {ItemFlatListUser, Loading} from './../../../../components';
import {useNavigation} from '@react-navigation/native';

const PAGE = 6;
const getDataFlatList = (skip = 0, take = 6) => {
  return new Promise((resolve, reject) => {
    if (skip > listData.length) {
      resolve([]);
    } else {
      setTimeout(() => {
        resolve(listData.slice(skip, take));
      }, 2000);
    }
  });
};

const Recipes = ({}) => {
  const navigation = useNavigation();
  const [listRecipes, setListRecipes] = useState({data: [], skip: 0});
  const [isFetching, setIsFetching] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(true);

  useEffect(() => {
    setIsMounted(true);
    setIsFetching(true);
    getDataFlatList()
      .then(dataResponse => {
        if (!!dataResponse.length && isMounted) {
          setListRecipes({data: dataResponse, skip: PAGE});
        }
      })
      .finally(() => setIsFetching(false));
    return () => setIsMounted(false);
  }, []);
  const onRefreshData = () => {
    setIsFetching(true);
    setListRecipes({data: [], skip: 0});
    getDataFlatList()
      .then(dataResponse => {
        if (!!dataResponse.length && isMounted) {
          setListRecipes({data: dataResponse, skip: PAGE});
        }
      })
      .finally(() => setIsFetching(false));
  };

  const onLoadMore = () => {
    setIsFetching(true);
    getDataFlatList(listRecipes.skip, listRecipes.skip + PAGE)
      .then(dataResponse => {
        if (!!dataResponse.length && isMounted) {
          setListRecipes({
            data: [...listRecipes.data, ...dataResponse],
            skip: listRecipes.skip + PAGE,
          });
        }
      })
      .finally(() => setIsFetching(false));
  };

  const renderEmptyData = () => (
    <SkeletonPlaceholder>
      <View style={styles.styleLoading}>
        <React.Fragment>
          <View style={styles.isLoadingStyle} />
          <View style={styles.isLoadingStyle} />
          <View style={styles.isLoadingStyle} />
          <View style={styles.isLoadingStyle} />
        </React.Fragment>
        <React.Fragment>
          <View style={styles.isLoadingStyle} />
          <View style={styles.isLoadingStyle} />
          <View style={styles.isLoadingStyle} />
          <View style={styles.isLoadingStyle} />
        </React.Fragment>
      </View>
    </SkeletonPlaceholder>
  );
  return (
    <View>
      <FlatList
        ListEmptyComponent={renderEmptyData}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <ItemFlatListUser
            onPress={() => navigation.navigate(screens.MY_RECIPE)}
            item={item}
          />
        )}
        data={listRecipes.data}
        onEndReached={onLoadMore}
        ListFooterComponent={
          isFetching ? (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: scaleHeight(100),
              }}>
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
      />
    </View>
  );
};

export default React.memo(Recipes);

const styles = StyleSheet.create({
  imageItem: {
    width: '100%',
    height: scale(100),
  },
  item: {
    alignItems: 'center',
    margin: scale(3),
    borderRadius: scale(8),
    alignItems: 'center',
    backgroundColor: colors.white,
    width: scale(150),
    marginTop: scaleHeight(15),
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    color: colors.black,
    fontSize: FONT_SIZE.MEDIUM,
  },
  isLoadingStyle: {
    width: scale(150),
    height: scale(120),
    backgroundColor: colors.white,
    borderRadius: scale(20),
    margin: scale(8),
  },
  styleLoading: {
    flexDirection: 'row',
  },
});
