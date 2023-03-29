import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {COLORS, SIZES} from '../../contains';
import OptionItem from './OptionItem';
import OptionItemBoolean from './OptionItemBoolean';

export default function RenderOptions({
  option,
  validateAnswer,
  isOptionsDisabled,
  correctOption,
  currentOptionSelected,
  type,
}) {
  if (type === 'multiple') {
    return (
      <OptionItem
        option={option}
        validateAnswer={validateAnswer}
        isOptionsDisabled={isOptionsDisabled}
        correctOption={correctOption}
        currentOptionSelected={currentOptionSelected}
      />
    );
  } else if (type === 'boolean') {
    return (
      <OptionItemBoolean
        option={option}
        validateAnswer={validateAnswer}
        isOptionsDisabled={isOptionsDisabled}
        correctOption={correctOption}
        currentOptionSelected={currentOptionSelected}
      />
    );
  }
}
