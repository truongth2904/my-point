import React, {useCallback, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ButtonBack,
  ButtonFunction,
  CustomButton,
  IconAndText,
  TextAndIcon,
} from '../../components';
import {
  SheetAdditionalInfo,
  SheetGallery,
  SheetHowToCook,
  SheetIngredients,
} from './components';
import colors from '../../constants/colors';
import {scale} from '../../utils';
import {food1, gallery1, gallery2, user} from './../../assets/images';
import styles from './editRecipe.style';

const EditRecipeView = ({onPressBack, recipe}) => {
  const [listDropDown, setItems] = useState([
    {label: 'Western (5)', value: 'western'},
    {label: 'Quick Lunch (8)', value: 'quickLunch'},
    {label: 'Veggies (9)', value: 'veggies'},
  ]);

  const refRBSheetGallery = useRef();
  const refRBSheetIngredients = useRef();
  const refRBSheetHowToCook = useRef();
  const refRBSheetAdditionalInfo = useRef();

  const onPressIconGallery = useCallback(() => {
    refRBSheetGallery.current.open();
  }, []);

  const onPressIconIngredients = useCallback(() => {
    refRBSheetIngredients.current.open();
  }, []);

  const onPressIconHowToCook = useCallback(() => {
    refRBSheetHowToCook.current.open();
  }, []);

  const onPressIconAdditionalInfo = useCallback(() => {
    refRBSheetAdditionalInfo.current.open();
  }, []);

  return (
    <View style={styles.view}>
      <ButtonBack onPressBack={onPressBack} text={'Back to My Recipes'} />
      <Text style={styles.textTitleScreen}>{'Edit Recipe'}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recipeNormal}>
          <Image style={styles.imageNormal} source={recipe.images[0]} />
          <View style={styles.recipeNormalRight}>
            <Text style={styles.textRecipeName}>Recipe Name</Text>
            <TextInput style={styles.textInputName} value={recipe.name} />
          </View>
        </View>

        <View style={styles.gallery}>
          <TextAndIcon
            onPressIcon={onPressIconGallery}
            text={'Gallery'}
            Icon={Feather}
            textIcon={'edit-2'}
          />
          <View style={styles.viewImagesGallery}>
            <Image source={recipe.images[0]} style={styles.imageGallery} />
          </View>
          <View style={styles.viewImageSmall}>
            <Image source={recipe.images[1]} style={styles.imageGallerySmall} />
            <Image source={recipe.images[2]} style={styles.imageGallerySmall} />
            <ImageBackground
              style={styles.imageSmallEnd}
              source={recipe.images[3]}>
              <View style={styles.imageOpacity}>
                <Text style={styles.textNumber}>+12</Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={styles.ingredients}>
          <TextAndIcon
            onPressIcon={onPressIconIngredients}
            text={'Ingredients'}
            Icon={Feather}
            textIcon={'edit-2'}
          />
          <View style={styles.viewFlatListSpice}>
            <FlatList
              keyExtractor={item => item.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={recipe.ingredients}
              renderItem={({item, index}) => {
                if (index > 4) {
                  return;
                }
                if (index == 4) {
                  return (
                    <ImageBackground
                      imageStyle={{borderRadius: scale(50)}}
                      style={styles.imageSpice}
                      source={item}>
                      <View style={styles.viewAmount}>
                        <Text style={styles.textAmount}>+12</Text>
                      </View>
                    </ImageBackground>
                  );
                } else {
                  return <Image style={styles.imageSpice} source={item} />;
                }
              }}
            />
          </View>
          <View style={styles.viewIngredientsText}>
            {recipe.listIngredients.map((element, index) => {
              if (index < 5) {
                return (
                  <Text style={styles.textSpices}>
                    {element.name} {', '}
                  </Text>
                );
              }
            })}
            <Text>{'...'}</Text>
          </View>
        </View>

        <View style={styles.howToCook}>
          <TextAndIcon
            onPressIcon={onPressIconHowToCook}
            text={'How to cook'}
            Icon={Feather}
            textIcon={'edit-2'}
          />
          {recipe.listHowToCook.map((element, index) => (
            <View style={styles.viewHowToCookItem}>
              <Text style={styles.borderNumber}>{index + 1}</Text>
              <Text style={styles.textHowToCookItem}>{element}</Text>
            </View>
          ))}
        </View>

        <View style={styles.ingredients}>
          <TextAndIcon
            onPressIcon={onPressIconAdditionalInfo}
            text={'Additional Info'}
            Icon={Feather}
            textIcon={'edit-2'}
          />
          <View style={styles.viewAdditionalInfo}>
            <View style={styles.viewAdditional}>
              <Text style={styles.textServing}>Serving Time</Text>
              <Text style={styles.textAdd}>
                {recipe.additionalInfo.servingTime} {' Mins'}
              </Text>
            </View>
            <View style={styles.viewAdditional}>
              <Text style={styles.textServing}>Nutrition Facts</Text>
              <Text style={styles.textAdd}>
                {recipe.additionalInfo.NutritionFacts.map(
                  (element, index) => element + '\n',
                )}
              </Text>
            </View>
            <View style={styles.viewAdditional}>
              <Text style={styles.textServing}>Tags</Text>
              <Text style={styles.textAdd}>
                {recipe.tags.map((element, index) => element + ' ')}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.saveTo}>Save to</Text>
        <View style={styles.buttonBottom}>
          <TouchableOpacity style={styles.viewDropDown}>
            <Text style={styles.textDropDown}>{listDropDown[0].label}</Text>
            <Entypo color={colors.black} name="chevron-down" size={20} />
          </TouchableOpacity>

          <ButtonFunction style={styles.buttonSave} text={'Save Recipe'} />
        </View>
        <CustomButton isPress={true} title={'Post to Feed'} />
        <View style={styles.iconButtonRemove}>
          <IconAndText
            Icon={MaterialCommunityIcons}
            nameIcon={'delete-outline'}
            text={'Remove from Cookbook'}
          />
        </View>
        <SheetIngredients
          ingredients={recipe.listIngredients}
          refRBSheet={refRBSheetIngredients}
        />
        <SheetGallery
          galleries={recipe.images}
          refRBSheet={refRBSheetGallery}
        />
        <SheetAdditionalInfo
          tags={recipe.tags}
          additionalInfo={recipe.additionalInfo}
          refRBSheet={refRBSheetAdditionalInfo}
        />
        <SheetHowToCook
          listHowToCook={recipe.listHowToCook}
          refRBSheet={refRBSheetHowToCook}
        />
      </ScrollView>
    </View>
  );
};

export default React.memo(EditRecipeView);
