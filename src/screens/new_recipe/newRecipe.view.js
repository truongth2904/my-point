import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ButtonBack,
  ButtonFunction,
  CustomButton,
  IconAndText,
} from '../../components';
import NewRecipe from './components/NewRecipe';
import colors from '../../constants/colors';
import {scale} from '../../utils';
import styles from './newRecipe.style';

const NewRecipeView = ({onPressBack, listDropDown}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.view}>
        <ButtonBack onPressBack={onPressBack} text={'Back to My Recipes'} />
        <Text style={styles.textTitleScreen}>{'New Recipe'}</Text>

        <View style={styles.recipeNormal}>
          <TouchableOpacity style={styles.imageNormal}>
            <Feather name="plus" size={scale(20)} color={colors.gray} />
          </TouchableOpacity>

          <View style={styles.recipeNormalRight}>
            <Text style={styles.textRecipeName}>Recipe Name</Text>
            <TextInput style={styles.textInputName} />
          </View>
        </View>

        <NewRecipe
          style={styles.styleView}
          text={'Gallery'}
          textButton={'Upload Images or Open Camera'}
        />
        <NewRecipe
          style={styles.styleView}
          text={'Ingredients'}
          textButton={'Add Ingredient'}
        />
        <NewRecipe
          style={styles.styleView}
          text={'How to Cook'}
          textButton={'Add Directions'}
        />
        <NewRecipe
          style={styles.styleView}
          text={'Additional Info'}
          textButton={'Add Info'}
        />

        <Text style={styles.saveTo}>Save to</Text>
        <View style={styles.buttonBottom}>
          <TouchableOpacity style={styles.viewDropDown}>
            <Text style={styles.textDropDown}>{listDropDown[0].label}</Text>
            <Entypo color={colors.black} name="chevron-down" size={20} />
          </TouchableOpacity>
          <ButtonFunction style={styles.buttonSave} text={'Save Recipe'} />
        </View>
        <CustomButton isPress={false} title={'Post to Feed'} />
        <View style={styles.iconButtonRemove}>
          <IconAndText
            Icon={MaterialCommunityIcons}
            nameIcon={'delete-outline'}
            text={'Remove from Cookbook'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default React.memo(NewRecipeView);
