import React from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton, CustomTextInput} from '../../../components';
import BannerAuth from '../../../components/BannerAuth';
import styles from './login.styles';

const LoginView = ({
  onPressCreateAccount,
  email,
  pass,
  textDangerEmail,
  onPressButtonLogin,
  isPress,
}) => {
  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <BannerAuth text={'Welcome Back!'} />
      <View style={styles.viewLogin}>
        <Text style={styles.textPlease}>{'Please login to continue.'}</Text>
        <CustomTextInput
          onChangeText={email.changeText}
          value={email.value}
          textDanger={textDangerEmail}
          title={'Email address'}
          placeholder="user@email.com"
        />
        <CustomTextInput
          placeholder={'*****'}
          isPassWord={true}
          value={pass.value}
          onChangeText={pass.changeText}
          title={'Password'}
        />
        <View style={styles.viewCustomButton}>
          <CustomButton
            isPress={isPress}
            onPress={onPressButtonLogin}
            title={'Login'}
          />
        </View>

        <Text style={styles.textNewToScratch}>{'New to Scratch?'}</Text>
        <TouchableOpacity
          onPress={onPressCreateAccount}
          style={styles.buttonCreateAccount}>
          <Text style={styles.textButtonCreateAccount}>
            Create Account Here
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default React.memo(LoginView);
