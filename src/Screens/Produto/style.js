import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#44424C',
    padding: 35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  modalText: {
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  modalMarca: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: '#C6C6C6',
  },
  modalImage: {
    width: 200,
    height: 400,
    borderRadius: 4,
  },
  modalPreco: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#FFF',
  },
  btnCarrinho: {
    backgroundColor: '#00755c',
    padding: 10,
    borderRadius: 10,
  },
});

export default styles;
