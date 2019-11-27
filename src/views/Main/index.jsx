import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight} from 'react-native';
import logo from '../../resources/logo.jpg';
import styles from './styles';

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <Image source={logo} />
    <Text style={styles.text}>Toddler</Text>
    <TouchableHighlight style={styles.button} onPress={() => { navigation.replace('Boards'); }}>
      <Text>Boards</Text>
    </TouchableHighlight>
  </View>
);
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
