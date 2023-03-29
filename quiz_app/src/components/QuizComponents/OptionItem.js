import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS, SIZES} from '../../contains';
export default function OptionItem({
  option,
  validateAnswer,
  isOptionsDisabled,
  correctOption,
  currentOptionSelected,
}) {
  return (
    <View style={styles.answer}>
      {option.map(op => (
        <TouchableOpacity
          onPress={() => validateAnswer(op)}
          disabled={isOptionsDisabled}
          key={op}
          style={[
            styles.btn,
            {
              borderColor:
                op === correctOption
                  ? COLORS.success
                  : op === currentOptionSelected
                  ? COLORS.error
                  : COLORS.secondary + '40',
              backgroundColor:
                op === correctOption
                  ? COLORS.success + '20'
                  : op === currentOptionSelected
                  ? COLORS.error + '20'
                  : COLORS.secondary + '20',
            },
          ]}>
          <Text style={styles.text}>{op}</Text>

          {/* Show Check Or Cross Icon based on correct answer*/}
          {op === correctOption ? (
            <View style={styles.correct}>
              <MaterialCommunityIcons name="check" style={styles.icon} />
            </View>
          ) : op === currentOptionSelected ? (
            <View style={styles.currentOption}>
              <MaterialCommunityIcons name="close" style={styles.icon} />
            </View>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  answer: {
    height: SIZES.height * 0.4 - 40,
  },
  btn: {
    borderWidth: 3,
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  correct: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentOption: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: COLORS.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLORS.white,
    fontSize: 20,
  },
  text: {fontSize: 20, color: COLORS.black},
});
