import React from 'react';
import { Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

const Thumbnail = ({ id, name, thumbnailPhoto, navigation }) => (
  <TouchableHighlight
    style={styles.thumbnailContainer}
    onPress={() => { navigation.navigate('TaskList', { boardId: id }); }}
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
