import {StyleSheet, Text, View, FlatList, ScrollView} from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';
import {SIZES} from '../../contains';

export default function CategoryComponent({onPress}) {
  const DATA = [
    {
      id: 0,
      title: 'Sports',
      image: {uri: 'https://cdn-icons-png.flaticon.com/128/1041/1041168.png'},
      question: 50,
    },
    {
      id: 1,
      title: 'Animals',
      image: {uri: 'https://cdn-icons-png.flaticon.com/128/616/616412.png'},
      question: 70,
    },
    {
      id: 2,
      title: 'Math',
      image: {uri: 'https://cdn-icons-png.flaticon.com/128/2249/2249539.png'},
      question: 100,
    },
    {
      id: 3,
      title: 'History',
      image: {uri: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png'},
      question: 80,
    },
    {
      id: 4,
      title: 'Biological',
      image: {uri: 'https://cdn-icons-png.flaticon.com/128/3182/3182554.png'},
      question: 60,
    },
    {
      id: 5,
      title: 'Chemistry',
      image: {uri: 'https://cdn-icons-png.flaticon.com/128/995/995446.png'},
      question: 30,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={{}}
        data={DATA}
        numColumns={2}
        renderItem={({item}) => <CategoryItem onPress={onPress} item={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.6,
  },
});
