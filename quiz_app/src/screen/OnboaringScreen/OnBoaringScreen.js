import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Onboaring from '../../components/OnboaringComponents/Onboaring';

export default function OnBoaringScreen({navigation}) {
  const onPress = () => {
    navigation.navigate('Login');
  };
  return (
    <View>
      <Onboaring onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
