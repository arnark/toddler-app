import React from 'react';
import {
  Text, Image, Alert, TouchableOpacity
} from 'react-native';
import styles from './styles';
import * as boardService from '../../../services/boardService';


function editAlert(boardId, boardTitle, boardThumbnailPhoto, navigation) {
  Alert.alert(
    'Board Settings',
    '',
    [
      {
        text: 'Edit board',
        onPress: () => navigation.navigate('EditBoard', {
          boardId, boardTitle, boardThumbnailPhoto, navigation
        })
      },
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
    onLongPress={() => { editAlert(id, name, thumbnailPhoto, navigation); }}
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
