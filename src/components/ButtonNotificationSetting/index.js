import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState, memo} from 'react';
import colors from '../../constants/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import {scale, scaleHeight} from '../../utils';
import {FONT_FAMILY, FONT_SIZE} from '../../constants/fonts';

const ButtonNotificationSetting = ({text, onToggle}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onToggle();
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{text}</Text>
      <ToggleSwitch
        size="small"
        isOn={isEnabled}
        onColor={colors.success}
        offColor={colors.gray}
        onToggle={toggleSwitch}
      />
    </View>
  );
};

export default memo(ButtonNotificationSetting);

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scaleHeight(20),
  },
  text: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: FONT_SIZE.MEDIUM,
    color: colors.black,
  },
});
