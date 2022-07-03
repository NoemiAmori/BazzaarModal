import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#2e4347',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 48,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontFamily: 'serif',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});

export default styles;
