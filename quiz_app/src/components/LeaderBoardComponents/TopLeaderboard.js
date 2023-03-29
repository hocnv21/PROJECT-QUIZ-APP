import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import TopLeaderBoardItem from './TopLeaderBoardItem';

export default function TopLeaderboard({data}) {
  // const data = [
  //   {
  //     id: 0,
  //     userName: 'mark_vbs',
  //     score: 9989,
  //     avatar:
  //       'https://images.unsplash.com/photo-1631465542864-de0cbd0215a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHNtaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 1,
  //     userName: 'melody',
  //     score: 8787,
  //     avatar:
  //       'https://images.unsplash.com/photo-1580465446361-8aae5321522b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  //   {
  //     id: 1,
  //     userName: 'Jonh wick',
  //     score: 6555,
  //     avatar:
  //       'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHNtaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //   },
  // ];

  return (
    <View style={styles.topRank}>
      <TopLeaderBoardItem size={90} data={data[1]} top={2} />
      <TopLeaderBoardItem size={120} data={data[0]} top={1} />
      <TopLeaderBoardItem size={90} data={data[2]} top={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  topRank: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
});
