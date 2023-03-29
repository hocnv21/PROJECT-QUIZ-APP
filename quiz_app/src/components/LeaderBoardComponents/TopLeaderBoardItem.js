import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

export default function TopLeaderBoardItem({size, data, top}) {
  const crown = require('../../assets/image/crown.png');
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        {top === 1 ? (
          <Image source={crown} />
        ) : (
          <Text style={{fontSize: 24}}>{top}</Text>
        )}

        <Avatar.Image
          style={styles.avatar}
          size={size}
          source={{
            uri: data.photoURL,
          }}
        />
        <Text style={styles.size32}>{data.score}</Text>
        <Text style={styles.name}>{data.displayName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    margin: 10,
    resizeMode: 'cover',
  },
  size32: {fontSize: 32, fontWeight: '400'},
  name: {fontSize: 18, fontWeight: '600'},
});
