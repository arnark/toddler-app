import React from 'react';
import { Image, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

const BoardsThumbnail = ({ thumbnailPhoto, name }) => (

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

export default BoardsThumbnail;
