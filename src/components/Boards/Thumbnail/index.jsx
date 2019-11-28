import React from 'react';
import {
  Text, Image, TouchableHighlight, Alert, TouchableOpacity, Button, View
} from 'react-native';
import styles from './styles';
import * as boardService from '../../../services/boardService';


function doAlert(boardId) {
  Alert.alert(
    'Board Settings',
    '',
    [
      { text: 'Edit board', onPress: () => console.log('Ask me later pressed') },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete board',
        onPress: () => boardService.deleteBoard(boardId),
        style: 'destructive',
      },
    ],
    { cancelable: true },
  );
}

const Thumbnail = ({ id, name, thumbnailPhoto, navigation }) => (

  <TouchableOpacity
    style={styles.thumbnailContainer}
    onPress={() => { navigation.navigate('TaskList', { boardId: id }); }}
    onLongPress={() => { doAlert(id); }}
  >

    <>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
      <Text style={styles.thumbnailText}>{name}</Text>
    </>
  </TouchableOpacity>

);

export default Thumbnail;
