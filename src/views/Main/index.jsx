import React from 'react';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import logo from '../../resources/logo.jpg';
import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <Image source={logo} />
    <Text style={styles.text}>Toddler</Text>
    <TouchableHighlight style={styles.button}>
      <Text>Boards</Text>
    </TouchableHighlight>
  </View>
);

export default Main;
