import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {user} from './../../assets/images';
import {ButtonBack, CustomButton, CustomTextInput} from './../../components';
import styles from './edit.style';
import userProfile from '../../data/user';

const EditProfileView = ({onPressBack, emailUser}) => {
  return (
    <ScrollView style={styles.viewScroll}>
      <View style={styles.view}>
        <ButtonBack onPressBack={onPressBack} text={'Back to Profile'} />
        <Text style={styles.textTitleScreen}>{'Edit Profile'}</Text>
        <View style={styles.viewImage}>
          <Image style={styles.imageUser} source={userProfile.image} />
          <TouchableOpacity>
            <Text style={styles.textEditImage}>Edit Profile Picture</Text>
          </TouchableOpacity>
        </View>
        <CustomTextInput value={userProfile.fullName} title={'Full Name'} />
        <CustomTextInput value={userProfile.bio} title={'Bio'} />
        <Text style={styles.textTrending}>Trending Recipes</Text>
        <CustomTextInput value={emailUser} title={'Email'} />
        <CustomTextInput value={userProfile.phone} title={'Phone'} />
        <View style={styles.viewButton}>
          <CustomButton
            onPress={onPressBack}
            isPress={true}
            title={'Save Profile'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default React.memo(EditProfileView);
