import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const Thumbnail = ({ name, description }) => (

  <TouchableHighlight
    style={styles.thumbnailContainer}
  >
    <>
      <Text style={styles.thumbnailText}>{name}</Text>
      <Text style={styles.thumbnailText}>{description}</Text>
    </>
  </TouchableHighlight>

);

export default Thumbnail;
