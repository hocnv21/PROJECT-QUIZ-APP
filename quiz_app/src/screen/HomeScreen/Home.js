/* eslint-disable react-hooks/exhaustive-deps */
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import React, {useState, useEffect} from 'react';
import styles from './style';
import Rank_Point from '../../components/HomeComponents/Rank_Point';
import Header from '../../components/HomeComponents/Header';
import CategoryComponent from '../../components/HomeComponents/CategoryComponent';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AppContext from '../../navigator/AppContext';

export default function Home({navigation}) {
  const {user} = React.useContext(AppContext);
  const [profile, setProfile] = useState('');
  const linkAvatar = require('../../assets/image/girl.png');

  function unSub() {
    firestore()
      .collection('users')
      .onSnapshot(() => {});
  }

  // const getUser = async () => {
  //   return await firestore()
  //     .collection('users')
  //     .doc(user.uid)
  //     .onSnapshot(
  //       snapShot => {
  //         setProfile(snapShot.data());
  //         console.log('User data: ', snapShot.data());
  //       },
  //       error => {
  //         unsub();
  //       },
  //     );
  // };
  const getUser = async () => {
    console.log(user);
    const check = await firestore()
      .collection('users')
      .where('uid', '==', user.uid)
      .get();

    if (check.docs.length < 1) {
      await firestore().collection('users').doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        score: 0,
        point: 50,
      });
    }
    firestore()
      .collection('users')
      .doc(user.uid)
      .onSnapshot(
        doc => {
          setProfile(doc.data());
        },
        error => {
          unSub();
        },
      );
  };

  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getUser();
    });
    return focusHandler;
  }, []);

  const googleSignOut = async () => {
    auth()
      .signOut()
      .then(async () => {
        unSub();
        await GoogleSignin.signOut();

        console.log('User sign-out successfully!');
      })
      .catch(e => alert('Error', e.message));
  };

  return (
    <View style={styles.container}>
      {/** Header */}
      <Header user={profile} onPress={googleSignOut} />

      {/** infomation ranking and Points */}
      <Rank_Point data={profile} />

      <View>
        <Text style={styles.h2}>Let's play</Text>
        <CategoryComponent
          onPress={() =>
            navigation.navigate('Quiz', {
              oldPoint: profile.point,
              oldScore: profile.score,
            })
          }
        />
      </View>
    </View>
  );
}
