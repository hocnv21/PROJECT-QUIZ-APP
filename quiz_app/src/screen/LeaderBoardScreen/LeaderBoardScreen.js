import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {SIZES} from '../../contains';

import {Avatar} from 'react-native-paper';
import TopLeaderboard from '../../components/LeaderBoardComponents/TopLeaderboard';
import UserCard from '../../components/LeaderBoardComponents/UserCard';
import {ToggleButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

import AppContext from '../../navigator/AppContext';
import {data} from '../../assets/data/data';
export default function LeaderBoardScreen({navigation}) {
  const [value, setValue] = useState('left');
  const [dataBoard, setDataBoard] = useState([]);
  const [dataFlat, setDataFlat] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const {user} = useContext(AppContext);

  const getUsers = async () => {
    // setDataFor([]);
    const users = await firestore()
      .collection('users')
      .orderBy('score', 'desc')
      .get();
    const result = users.docs.map(docSnap => docSnap.data());
    let dataFor = [];
    for (let index = 3; index < result.length; index++) {
      const element = result[index];
      dataFor.push(element);
    }
    setDataBoard(result);
    setDataFlat(dataFor);
  };
  useEffect(() => {
    const focusHandler = navigation.addListener('focus', () => {
      getUsers();
    });
    return focusHandler;
  }, []);

  if (dataFlat.length === 0 || dataBoard.length < 1) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.topLayout}>
        <View style={styles.topTaps}>
          <TouchableOpacity style={styles.tap}>
            <Text style={styles.text}>All Time </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tap}>
            <Text style={styles.text}>This Week </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tap}>
            <Text style={styles.text}>This Month </Text>
          </TouchableOpacity>
        </View>
        <TopLeaderboard data={dataBoard} />
      </View>
      <View style={styles.bottomLayout}>
        <FlatList
          data={dataFlat}
          extraData={dataFlat}
          renderItem={({item, index}) => {
            return <UserCard data={item} index={index} />;
          }}
          keyExtractor={item => item.uid}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 40 : 0,
  },
  topLayout: {
    backgroundColor: '#E4D3F5',
    padding: 20,
    height: SIZES.height * 0.4,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  bottomLayout: {
    height: SIZES.height * 0.6 - 140,
  },
  topTaps: {
    flexDirection: 'row',
    backgroundColor: '#be9ede',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 5,
  },
  tap: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    color: 'blue',
  },
});
