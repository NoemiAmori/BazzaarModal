import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Style';
import Icon from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bazzaar</Text>
      <TouchableOpacity style={styles.icon}>
        <Icon name="shoppingcart" size={36} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
