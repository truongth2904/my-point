import React from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';
import {scale} from '../../utils';
import {ButtonBack} from './../../components';
import {AdditionalInfo, HowToCook, Ingredients} from './components';
import styles from './detail.style';

const DetailView = ({onPressBack, recipe}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const AdditionalInfoTab = () => (
    <AdditionalInfo additionalInfo={recipe.additionalInfo.NutritionFacts} />
  );
  const HowToCookTab = () => <HowToCook listHowToCook={recipe.listHowToCook} />;
  const IngredientsTab = () => <Ingredients ingredients={recipe.ingredients} />;

  const renderSceneMap = SceneMap({
    first: AdditionalInfoTab,
    second: HowToCookTab,
    third: IngredientsTab,
  });

  const [routes] = React.useState([
    {key: 'first', title: 'AdditionalInfo'},
    {key: 'second', title: 'HowToCook'},
    {key: 'third', title: 'Ingredients'},
  ]);
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={colors.black}
        inactiveColor={colors.gray}
        indicatorStyle={styles.bottomLabel}
        style={styles.tabBar}
        renderLabel={({route, color}) => {
          return (
            <View style={styles.tabItem}>
              <Animated.Text style={[{color: color}, styles.textLabel]}>
                {route.title}
              </Animated.Text>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.view}>
      <ImageBackground style={styles.imageMain} source={recipe.images[0]}>
        <View style={styles.headerBackground}>
          <View style={styles.header}>
            <ButtonBack
              isColorWhite={true}
              text={'Back to My Profile'}
              onPressBack={onPressBack}
            />
            <TouchableOpacity activeOpacity={0.3} style={styles.buttonPlay}>
              <Ionicons name="play" size={scale(20)} />
              <Text style={styles.textCookNow}>{'Cook Now'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.textInBackground}>{recipe.name}</Text>
        </View>
      </ImageBackground>

      <View style={styles.listImageDetail}>
        <Image style={styles.imageSmall} source={recipe.images[1]} />
        <Image style={styles.imageSmall} source={recipe.images[2]} />

        <ImageBackground style={styles.imageSmallEnd} source={recipe.images[3]}>
          <View style={styles.imageOpacity}>
            <Text style={styles.textNumber}>+12</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.viewTabView}>
        <TabView
          navigationState={{index, routes}}
          onIndexChange={setIndex}
          renderScene={renderSceneMap}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
};

export default React.memo(DetailView);
