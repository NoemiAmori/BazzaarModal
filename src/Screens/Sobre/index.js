import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './Style';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../Components/Header/Header';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View
          style={{
            alignItems: 'center',
            borderBottomWidth: 2,
            borderBottomColor: '#fff',
            marginBottom: 20,
          }}>
          <Image
            source={{uri: 'https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbWVyY2lvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}
            style={styles.imageBig}
          />
          <ScrollView style={{height: 250}}>
            <Text style={styles.txtSobre}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
          </ScrollView>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="creditcard" size={20} color="#FFF" />
            <Text style={styles.txtNormal}>Formas de pagamento</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
              source={require('../../Images/Icons/maestro.png')}
              style={styles.image}
            />
            <Image
              source={require('../../Images/Icons/visa.png')}
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
          <View style={{flexDirection: 'row', marginVertical: 10}}>
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
      </ScrollView>
    </View>
  );
};

export default Sobre;
