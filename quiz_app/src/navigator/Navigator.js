import React, {useEffect, useState} from 'react';
import {View, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AppContext from './AppContext';
import LoginScreen from '../screen/LoginScreen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen/RegisterScreen';
import Home from '../screen/HomeScreen/Home';
import Quiz from '../screen/QuizScreen/Quiz';
import OnBoaringScreen from '../screen/OnboaringScreen/OnBoaringScreen';
import AccountScreen from '../screen/AccountScreen/AccountScreen';
import LeaderBoardScreen from '../screen/LeaderBoardScreen/LeaderBoardScreen';
import BottomTap from '../bottomTaps/BottomTap';
import MainView from '../screen/MainView';

const Stack = createStackNavigator();
const StackAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoaring"
        component={OnBoaringScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={BottomTap}
      />

      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="MainView" component={MainView} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const scheme = useColorScheme();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <AppContext.Provider
      value={{
        user: user,
      }}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <StatusBar barStyle="light-content" backgroundColor="green" /> */}
        <View style={{flex: 1}}>{!user ? <StackAuth /> : <StackHome />}</View>
        {/* <View style={{flex: 1}}>
          <StackAuth />
        </View> */}
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default Navigator;
