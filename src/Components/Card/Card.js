import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';

const Card = props => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={{uri: props.foto}} style={styles.image} />
      <Text style={styles.txtMarca}>{props.marca}</Text>
      <Text style={styles.txtDesc}>{props.descricao}</Text>
      <Text style={styles.txtPreco}>R$ {props.preco}</Text>
    </TouchableOpacity>
  );
};

export default Card;
