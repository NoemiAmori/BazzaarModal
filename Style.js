import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '95%',
    height: 344,
    marginTop: 20,
    borderRadius: 3,
  },
  txtSub: {
    fontSize: 24,
    fontFamily: 'serif',
    paddingLeft: 10,
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  list: {
    margin: 10,
  },
  empresa: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#44424C',
  },
  txtEmpresa: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFF',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#44424C',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  close: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 10,
  },
  btnClose: {
    fontSize: 30,
    color: '#FFF',
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
});

export default styles;