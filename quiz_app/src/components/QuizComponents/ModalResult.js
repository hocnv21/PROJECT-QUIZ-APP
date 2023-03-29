import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../contains';

export default function ModalResult({
  showScoreModal,
  score,
  allQuestions,
  restartQuiz,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>
          {score > allQuestions.length / 2 ? 'Congratulations!' : 'Oops!'}
        </Text>

        <View style={styles.score}>
          <Text
            style={{
              fontSize: 30,
              color:
                score > allQuestions.length / 2 ? COLORS.success : COLORS.error,
            }}>
            {score}
          </Text>
          <Text style={styles.textQ}>/ {allQuestions.length}</Text>
        </View>
        {/* Retry Quiz button */}
        <TouchableOpacity onPress={restartQuiz} style={styles.btn}>
          <Text style={styles.textBtn}>Retry Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: COLORS.accent,
    padding: 20,
    width: '100%',
    borderRadius: 20,
  },
  textBtn: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 20,
  },
  textQ: {
    fontSize: 20,
    color: COLORS.black,
  },
  score: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
  },
});
