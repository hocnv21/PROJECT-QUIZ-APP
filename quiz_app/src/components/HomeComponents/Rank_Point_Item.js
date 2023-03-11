import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../contains';

export default function Rank_Point_Item({uri, title, score}) {
  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: 'row',

        alignItems: 'center',
      }}>
      <Image
        style={{
          resizeMode: 'contain',
          width: 40,
          height: 40,
          marginHorizontal: 20,
        }}
        source={{
          uri: uri,
        }}
      />
      <View style={{}}>
        <Text style={{fontWeight: 'bold'}}>{title}</Text>
        <Text
          style={{fontSize: 24, fontWeight: '700', color: COLORS.jade_green}}>
          {score}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
