import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Thumbnail = ({ name, color }) => (
  <TouchableHighlight
    style={styles.thumbnailContainer}
  >
    <Text style={styles.thumbnailText}>{name}</Text>
  </TouchableHighlight>
);

export default Thumbnail;
