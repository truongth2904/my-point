import React from 'react';
import {
  Animated,
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../constants/colors';
import {scale} from '../../utils';
import {
  ButtonBack,
  CustomButton,
  ItemTextAndText,
} from './../../components';

import Recipes from './components/Recipes';
import Following from './components/Following';
import styles from './otherUserProfile.style';

const OtherUserView = ({routes, onPressBack, user}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderSceneMap = SceneMap({
    first: Recipes,
    second: Following,
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
      <View style={styles.headerView}>
        <ButtonBack onPressBack={onPressBack} text={'Back'} />
        <TouchableOpacity>
          <Entypo
            size={scale(20)}
            color={colors.black}
            name="dots-three-horizontal"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.viewInfoUser}>
        <View style={styles.viewTopInfo}>
          <Image style={styles.imageUser} source={user.image} />
          <View style={styles.viewInfo}>
            <Text style={styles.nameUser}>{user.name}</Text>
            <Text style={styles.rankUser}>{user.hobby}</Text>
            <ItemTextAndText
              text1={'followers'}
              text2={'likes'}
              number1={584}
              number2={23}
            />
          </View>
        </View>
        <View style={styles.cusTomButton}>
          <CustomButton isPress={true} title={'Follow'} />
        </View>
      </View>

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

export default React.memo(OtherUserView);
