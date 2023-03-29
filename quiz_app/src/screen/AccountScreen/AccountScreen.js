import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Feather from 'react-native-vector-icons/Feather';
import SettingCard from '../../components/AccountComponents/SettingCard';

import AppContext from '../../navigator/AppContext';
import firestore from '@react-native-firebase/firestore';

export default function AccountScreen() {
  function unSub() {
    firestore()
      .collection('users')
      .onSnapshot(() => {});
  }

  const {user} = React.useContext(AppContext);
  const googleSignOut = async () => {
    unSub();
    console.log('signing out');
    auth()
      .signOut()
      .then(async () => {
        await GoogleSignin.signOut();

        console.log('User sign-out successfully!');
      })
      .catch(e => alert('Error', e.message));
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: user?.photoURL}} />
      <Text style={styles.text1}>{user.displayName}</Text>

      <SettingCard
        icon="shield-account"
        tittle="Thông tin cá nhân"
        onPress={() => {
          console.log(user);
        }}
      />
      <SettingCard icon="logout" tittle="Đăng xuất" onPress={googleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 40 : 0,
    backgroundColor: '#ffff',
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
    resizeMode: 'contain',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
