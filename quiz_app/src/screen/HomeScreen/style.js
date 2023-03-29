import {StyleSheet, useWindowDimensions, Platform} from 'react-native';
import {Dimensions} from 'react-native';
import {COLORS} from '../../contains';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: '#ffffff',
  },

  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  button: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.violet,
    borderRadius: 20,

    marginVertical: 10,
  },
  text_while: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  h1: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
});
export default styles;
