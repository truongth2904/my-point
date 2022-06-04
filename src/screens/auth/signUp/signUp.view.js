import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BannerAuth, CustomButton, CustomTextInput} from '../../../components';
import styles from './signUp.styles';

const SignUpView = ({
  onPressLoginHere,
  email,
  pass,
  fullName,
  onPressButtonLogin,
  isPress,
  textDangerEmail,
}) => {
  return (
    <ScrollView>
      <BannerAuth text={'Start \nfrom Scratch'} />
      <View style={styles.viewLogin}>
        <Text style={styles.textPlease}>{'Create account to continue.'}</Text>
        <CustomTextInput
          value={fullName.value}
          onChangeText={fullName.changeText}
          title={'Full Name'}
          placeholder="Nick Evans"
        />
        <CustomTextInput
          textDanger={textDangerEmail}
          value={email.value}
          onChangeText={email.changeText}
          title={'Email'}
          placeholder={'user@email.com'}
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
            title={'Create Account'}
          />
        </View>

        <Text style={styles.textNewToScratch}>
          {'Already have an account?'}
        </Text>
        <TouchableOpacity
          onPress={onPressLoginHere}
          style={styles.buttonCreateAccount}>
          <Text style={styles.textButtonLoginHere}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default React.memo(SignUpView);
