import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';

import {COLORS, SIZES} from '../../contains';

export default function CategoryItem({item, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          zIndex: 2,
          top: 0,
          left: 30,
          resizeMode: 'contain',
          height: 80,
          width: 80,
        }}
        source={item.image}
      />
      <View style={styles.car}>
        <Text style={styles.h3}>{item.title}</Text>
        <Text>{item.question} questions</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  car: {
    padding: 20,
    paddingTop: 75,
    borderRadius: 16,
    margin: 10,
    width: Dimensions.get('window').width * 0.4,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 7,
  },
  h3: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
});
