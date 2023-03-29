import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../contains';
import Rank_Point_Item from './Rank_Point_Item';

export default function Rank_Point({data}) {
  const iconLeft = 'https://cdn-icons-png.flaticon.com/128/3112/3112946.png';
  const titleLeft = 'Hi-Score';
  const scoreLeft = data?.score;
  const iconRight = 'https://cdn-icons-png.flaticon.com/128/1490/1490853.png';
  const titleRight = 'Points';
  const pointRight = data?.point;
  return (
    <View style={styles.container}>
      {/** Left */}
      <Rank_Point_Item uri={iconLeft} title={titleLeft} score={scoreLeft} />

      <View
        style={{
          width: 2,
          height: '80%',
          borderRadius: 2,
          backgroundColor: COLORS.light_gray,
        }}
      />
      {/**Right */}
      <Rank_Point_Item uri={iconRight} title={titleRight} score={pointRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    marginVertical: 30,
    borderRadius: 16,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 7,
  },
});
