import React from 'react';
import {
  Text, Image, Alert, TouchableOpacity
} from 'react-native';
import styles from './styles';
import * as boardService from '../../../services/boardService';


function editAlert(boardId) {
  Alert.alert(
    'Board Settings',
    '',
    [
      { text: 'Edit board', onPress: () => console.log('Edit board pressed') },
      {
        text: 'Cancel',
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
    onLongPress={() => { editAlert(id); }}
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
