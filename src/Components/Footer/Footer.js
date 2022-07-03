import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Style';
import Icon from 'react-native-vector-icons/AntDesign';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="creditcard" size={20} color="#FFF" />
          <Text style={styles.txtNormal}>Formas de pagamento</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            source={require('../../Images/Icons/visa.png')}
            style={styles.image}
          />
          <Image
            source={require('../../Images/Icons/maestro.png')}
            style={styles.image}
          />
          <Image
            source={require('../../Images/Icons/dinheiro.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Icon name="staro" size={20} color="#FFF" />
          <Text style={styles.txtNormal}>Redes Sociais</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Icon name="instagram" size={30} color="#FFF" style={styles.icon} />
          <Icon
            name="facebook-square"
            size={30}
            color="#FFF"
            style={styles.icon}
          />
          <Icon name="youtube" size={30} color="#FFF" style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Footer;