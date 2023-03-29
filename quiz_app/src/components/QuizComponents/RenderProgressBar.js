import {StyleSheet, Text, View, Animated} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../contains';

export default function RenderProgressBar({progressAnim}) {
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progress,
          {
            width: progressAnim,
          },
        ]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    borderRadius: 20,
    backgroundColor: '#00000020',
  },
  progress: {
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.accent,
  },
});
