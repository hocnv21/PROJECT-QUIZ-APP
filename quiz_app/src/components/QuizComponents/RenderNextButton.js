import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../contains';

export default function RenderNextButton({
  showNextButton,
  indexQues,
  questions,
  handlePressDone,
  handlePressNext,
}) {
  if (showNextButton && indexQues < questions.length - 1) {
    return (
      <TouchableOpacity onPress={handlePressNext} style={styles.btn}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    );
  } else if (showNextButton && indexQues === questions.length - 1) {
    return (
      <TouchableOpacity onPress={handlePressDone} style={styles.btn}>
        <Text style={styles.text}>done</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.accent,
    padding: 20,
    borderRadius: 5,
  },
  text: {fontSize: 20, color: COLORS.white, textAlign: 'center'},
});
