/* eslint-disable eol-last */
/* eslint-disable react/self-closing-comp */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {icons, COLORS, SIZES} from '../constants';

const Home = () => {

// function renderHeader() {
//     return (
//         <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Image source={require('../icons/new_logo.png')}>
//         </Image>
//         </View>
//     );
// }
// function renderCategories() {
//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity>
//       <View>

//       </View>
//       </TouchableOpacity>
//     );
//   };

  return (
    <View>
      <Text> Popular Recipe</Text>

      {/* <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => {item.id}}
          renderItem={renderItem}
      /> */}
    </View>
  );
};

export default Home;