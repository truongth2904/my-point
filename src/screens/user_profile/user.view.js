import React from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from '../../utils';
import colors from '../../constants/colors';
import {HeaderScreenText, ItemTextAndText} from './../../components';
import {Following, Recipes, Saved} from './components';
import styles from './user.style';
const UserView = ({
  onPressButtonSetting,
  onPressEditProfile,
  routes,
  infoUser,
  isFetching,
}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderSceneMap = SceneMap({
    first: Recipes,
    second: Saved,
    third: Following,
  });
  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={colors.black}
        inactiveColor={colors.gray}
        indicatorStyle={styles.bottomLabel}
        style={{backgroundColor: 'white', shadowColor: 'transparent'}}
        renderLabel={({route, color}) => {
          return (
            <View style={styles.tabItem}>
              <Animated.Text style={[{color: color}, styles.textLabel]}>
                {route.number}
              </Animated.Text>
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
      <HeaderScreenText
        textIcon={'Settings'}
        nameIcon={'settings-outline'}
        title={'My Kitchen'}
        Icon={Ionicons}
        onPressButton={onPressButtonSetting}
      />
      {isFetching ? (
        <View style={styles.viewInfoUser}>
          <Image style={styles.imageUser} source={infoUser.image} />
          <View style={styles.viewInfo}>
            <View style={styles.viewNameIconEdit}>
              <View>
                <Text style={styles.nameUser}>{infoUser.name}</Text>
                <Text style={styles.rankUser}>{infoUser.hobby}</Text>
              </View>
              <TouchableOpacity onPress={onPressEditProfile}>
                <Feather name="edit-2" color={colors.black} size={scale(20)} />
              </TouchableOpacity>
            </View>
            <ItemTextAndText
              text1={'followers'}
              text2={'likes'}
              number1={infoUser.followers}
              number2={infoUser.likes}
            />
          </View>
        </View>
      ) : (
        <SkeletonPlaceholder>
          <View style={styles.viewSkeleton}>
            <View style={styles.imageUser} />
            <View style={styles.viewInfoSkeleton} />
          </View>
        </SkeletonPlaceholder>
      )}

      <TabView
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderSceneMap}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default React.memo(UserView);
