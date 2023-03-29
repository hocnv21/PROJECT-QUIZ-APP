import {StyleSheet} from 'react-native';
import {SIZES} from '../../contains';

export const styles = StyleSheet.create({
  container: {
    padding: 20,

    height: '100%',
  },
  fadingContainer: {
    position: 'absolute',
    top: 0,
    left: SIZES.width * 0.5 - 70,
    width: 120,
    padding: 20,

    backgroundColor: 'powderblue',
  },
  question: {
    height: SIZES.height * 0.4 - 40,
  },
  answer: {
    height: SIZES.height * 0.4,
  },
  image: {
    height: SIZES.height * 0.4 - 80,
    width: SIZES.width * 0.9,
  },
  option: {
    backgroundColor: 'gray',
    borderRadius: 20,
    paddingLeft: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text_while: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  bottom: {
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 40,
    flexDirection: 'row',
  },
  action: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});
