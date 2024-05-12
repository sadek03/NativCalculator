import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  display: {
    width: '100%',
    height: 270,
    backgroundColor: '#3b252a',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  keyboard: {
    width: '100%',
    flex: 1,
    padding: 15,
  },
  input: {
    fontSize: 100,
    color: '#eacad2',
    textAlign: 'right',
    paddingHorizontal: 25,
  },
  keyboardText: {
    fontSize: 40,
    color: '#eacad2',
    textAlign: 'center',
    marginTop: -5,
  },
  button: {
    borderRadius: 100,
    overflow: 'hidden',
    width: Dimensions.get('window').width / 4 - 15,
    height: Dimensions.get('window').width / 4 - 15,
  },
  ripple: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10,
  },
});

export default styles;
