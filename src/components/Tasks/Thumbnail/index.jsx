import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Thumbnail = ({ id, name, color, navigation }) => (
  <TouchableHighlight
    style={styles.thumbnailContainer}
    onPress={() => { navigation.navigate('Task', { listId: id }); }}
  >
    <Text style={styles.thumbnailText}>{name}</Text>
  </TouchableHighlight>
);

export default Thumbnail;
