import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const BoardsThumbnail = ({ thumbnailPhoto, name }) => (
  <View style={styles.thumbnailContainer}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: thumbnailPhoto }}
    />
    <Text style={styles.thumbnailText}>{name}</Text>
  </View>
);

export default BoardsThumbnail;
