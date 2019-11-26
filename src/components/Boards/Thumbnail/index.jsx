import React from 'react';
import { Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

const Thumbnail = ({ thumbnailPhoto, name }) => (
  <TouchableHighlight
    style={styles.thumbnailContainer}
  >
    <>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
      <Text style={styles.thumbnailText}>{name}</Text>
    </>
  </TouchableHighlight>
);

export default Thumbnail;
