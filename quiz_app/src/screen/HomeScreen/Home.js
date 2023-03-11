import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';
import styles from './style';
import Rank_Point from '../../components/HomeComponents/Rank_Point';
import Header from '../../components/HomeComponents/Header';
import CategoryComponent from '../../components/HomeComponents/CategoryComponent';

export default function Home({navigation}) {
  const linkAvatar = require('../../assets/image/girl.png');
  // const {user} = React.useContext(AppContext);
  // const googleSignOut = async () => {
  //   auth()
  //     .signOut()
  //     .then(async () => {
  //       await GoogleSignin.signOut();

  //       console.log('User sign-out successfully!');
  //     })
  //     .catch(e => alert('Error', e.message));
  // };
  return (
    <View style={styles.container}>
      {/** Header */}
      <Header />
      {/** infomation ranking and Points */}
      <Rank_Point />
      <View>
        <Text style={styles.h2}>Let's play</Text>
        <CategoryComponent onPress={() => navigation.navigate('Quiz')} />
      </View>
    </View>
  );
}
