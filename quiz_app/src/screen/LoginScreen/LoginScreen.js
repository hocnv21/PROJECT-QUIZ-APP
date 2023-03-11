/* eslint-disable react-hooks/rules-of-hooks */
import {View, Image, Text, ScrollView, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';

import {TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import styles from './style';
import TextLine from '../../components/TextLine';
import Pressable_line from '../../components/Pressable_line';
import Logo_Login from '../../components/Logo_Login';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('hoc@gmail.com');
  const [password, setPassword] = useState('112233');
  const [googleLogin, setGoogleLogin] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const logoLink = require('../../assets/image/logo.png');

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '299651529836-gpvde3vd9h9bqi7n7shfv9nlr2f3enua.apps.googleusercontent.com',
  //   });
  // }, []);

  // const loginWithGoogle = async () => {
  //   // Get the users ID token
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   try {
  //     let loginUser = await auth().signInWithCredential(googleCredential);
  //     console.log(JSON.stringify(loginUser));
  //     setGoogleLogin(true);
  //   } catch (error) {
  //     setGoogleLogin(false);
  //   }
  // };
  // const onHandleLogin = async () => {
  //   if (!email || !password) {
  //     alert('please add all the field');
  //     return;
  //   }
  //   try {
  //     const result = await auth().signInWithEmailAndPassword(email, password);
  //     console.log(result);
  //   } catch (err) {
  //     alert('something went wrong');
  //   }
  // };
  const onHandleLogin = () => {
    navigation.navigate('Home');
  };
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image style={styles.logo} source={logoLink} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.form}>
            <View style={styles.welcom}>
              <Text style={styles.h1}>Welcome</Text>
              <Pressable_line
                textStart={"Don't have an account?"}
                textPressable={'Register now'}
                onPress={handleRegister}
              />
            </View>

            <Text>Email</Text>
            <TextInput
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
              style={styles.input}
              label="Email"
            />
            <Text>Password</Text>
            <TextInput
              placeholder="password"
              label="Password"
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={true}
              style={styles.input}
            />
            <View style={styles.forgotPass}>
              <View></View>
              <Pressable_line textPressable={'Forgot you password?'} />
            </View>
            <CustomButton
              onPress={onHandleLogin}
              title="login"
              disabled={!email || !password}
              type="PRIMARY"
            />
            <TextLine text={'Login with'} colorLine={'black'} />

            <View style={styles.login_logo}>
              <Logo_Login TYPE={'google'} />
              <Logo_Login TYPE={'facebook'} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
