import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../../contains';
import {Avatar} from 'react-native-paper';

export default function UserCard({data, index}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: SIZES.width * 0.15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}>{index + 4}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: SIZES.width * 0.5,

          alignItems: 'center',
        }}>
        <Avatar.Image
          style={{marginRight: 15}}
          source={{
            uri: data.photoURL,
          }}
        />
        <Text style={{fontSize: 18, fontWeight: '600'}}>
          {data.displayName}
        </Text>
      </View>
      <View
        style={{
          width: SIZES.width * 0.35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 24}}>{data.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF4FF',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
});
