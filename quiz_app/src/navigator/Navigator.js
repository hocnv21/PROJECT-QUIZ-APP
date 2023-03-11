import React, {useEffect} from 'react';
import {View, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import AppContext from './AppContext';
import LoginScreen from '../screen/LoginScreen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen/RegisterScreen';
import Home from '../screen/HomeScreen/Home';
import Quiz from '../screen/QuizScreen/Quiz';
import OnBoaringScreen from '../screen/OnboaringScreen/OnBoaringScreen';

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
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  const scheme = useColorScheme();
  const [user, setUser] = React.useState(null);

  // function onAuthStateChanged(userlogin) {
  //   setUser(userlogin);
  // }
  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  return (
    <AppContext.Provider
      value={{
        user: user,
      }}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <StatusBar barStyle="light-content" backgroundColor="green" /> */}
        <View style={{flex: 1}}>{!user ? <StackAuth /> : <StackHome />}</View>
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default Navigator;
