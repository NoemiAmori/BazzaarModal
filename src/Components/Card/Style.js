import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 139,
    height: 260,
    marginRight: 20,
    justifyContent: 'space-around',
  },
  image: {
    width: 135,
    height: 182,
    borderRadius: 4
  },
  txtMarca: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#C6C6C6',
  },
  txtDesc: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  txtPreco: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#121212',
  },
});

export default styles;
