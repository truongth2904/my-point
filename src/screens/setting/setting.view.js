import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ButtonBack, ButtonNotificationSetting} from '../../components';
import colors from '../../constants/colors';
import {scale} from '../../utils';
import styles from './setting.style';

const SettingView = ({onPressBack, logOut}) => {
  return (
    <View style={styles.view}>
      <View style={styles.viewHeader}>
        <ButtonBack text={'Back'} onPressBack={onPressBack} />
        <TouchableOpacity onPress={logOut} style={styles.touchSetting}>
          <Entypo name="log-out" color={colors.black} size={scale(20)} />
          <Text style={styles.textSetting}>{'Log Out'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textTitleScreen}>{'Settings'}</Text>
      <Text style={styles.textNotification}>{'Push Notifications'}</Text>
      <ButtonNotificationSetting
        onToggle={() => {}}
        text={'Notify me for followers'}
      />
      <ButtonNotificationSetting
        onToggle={() => {}}
        text={'When someone send me a message'}
      />
      <ButtonNotificationSetting
        onToggle={() => {}}
        text={'When someone do live cooking'}
      />
      <View style={styles.viewLine} />
      <Text style={styles.textNotification}>{'Privacy Settings'}</Text>
      <ButtonNotificationSetting
        onToggle={() => {}}
        text={'Followers can see my saved recipes'}
      />

      <Text style={styles.textContent}>
        If disabled, you won’t be able to see recipes saved by other profiles.
        Leave this enabled to share your collected recipes to others.
        <Text style={styles.textWhy}> why this matter?</Text>
      </Text>
      <ButtonNotificationSetting
        onToggle={() => {}}
        text={'Followers can see profiles I follow'}
      />

      <View style={styles.viewLine} />

      <TouchableOpacity style={styles.changePass}>
        <Text style={styles.textChangePass}>Change Password</Text>
        <MaterialIcons
          color={colors.black}
          name="navigate-next"
          size={scale(24)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(SettingView);
