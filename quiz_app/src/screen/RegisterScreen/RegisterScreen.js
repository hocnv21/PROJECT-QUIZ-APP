import React, {useState} from 'react';
import {View, ActivityIndicator, Text, Alert, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import TextLine from '../../components/TextLine';
import TextUnderline from '../../components/TextUnderline';
import Logo_Login from '../../components/Logo_Login';

import styles from './style';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);
  const [user, setUser] = useState();

  // const onUserRegister = async () => {
  //   setLoading(true);
  //   if (!email || !password || !passwordConfirm || !name) {
  //     alert('please add all the field');
  //     return;
  //   }
  //   try {
  //     const result = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     firestore().collection('users').doc(result.user.uid).set({
  //       displayName: name,
  //       email: result.user.email,
  //       uid: result.user.uid,
  //     });
  //   } catch (err) {
  //     console.log({err});
  //     Alert.alert('Something went wrong', err.code);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
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

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  const handleHaveAcc = () => {
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.bottom}>
          <View style={styles.form}>
            <View style={styles.welcom}>
              <Text style={styles.h1}>Register</Text>
            </View>
            <Text>Full Name</Text>
            <TextInput
              placeholder="Name Profile"
              label="Full Name"
              onChangeText={setName}
              style={styles.input}
              outline
            />
            <Text>Email</Text>
            <TextInput
              label="Email"
              dense={true}
              placeholder="email"
              onChangeText={setEmail}
              style={styles.input}
            />
            <Text>Password</Text>
            <TextInput
              placeholder="Password"
              label="Password"
              onChangeText={setPassword}
              secureTextEntry={true}
              style={styles.input}
            />
            <Text>Confirm Password</Text>
            <TextInput
              placeholder="Confirm Password"
              label="Confirm Password"
              onChangeText={setPasswordConfirm}
              secureTextEntry={true}
              style={styles.input}
            />
            <CustomButton
              title="Register"
              type="PRIMARY"
              disabled={!email || !password || !name || !passwordConfirm}
              // onPress={() => onUserRegister()}
            />
            <View style={styles.haveAcc}>
              <View></View>
              <TextUnderline
                onPress={handleHaveAcc}
                text={'You have an account?'}
              />
            </View>

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
