import {StyleSheet, Text, View, Platform, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import React from 'react';

export default function Header({onPress, user}) {
  const linkAvatar = require('../../assets/image/girl.png');

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.h1}>Hi, {user.displayName}</Text>
        <Text>Let's make this day profuctive</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Avatar.Image
          source={user.photoURL ? {uri: user.photoURL} : linkAvatar}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
});
