import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';
import styles from './style';

const Produto = ({route}) => {
  return (
    <View style={styles.modalView}>
      <Image source={{uri: route.params.foto}} style={styles.modalImage} />
      <Text style={styles.modalMarca}>{route.params.marca}</Text>
      <Text style={styles.modalText}>{route.params.descricao}</Text>
      <Text style={styles.modalPreco}>R$ {route.params.preco}</Text>
      <TouchableOpacity style={styles.btnCarrinho}>
        <Text style={styles.modalPreco}>Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Produto;
