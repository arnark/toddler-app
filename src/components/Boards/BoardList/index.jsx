import React from 'react';
import { View, FlatList } from 'react-native';
import BoardsThumbnail from '../Thumbnail'
import styles from './styles'

const BoardsList = ({ boards, navigation }) => (
  <View style={styles.marginer}>
    <FlatList
      numColumns={2}
      data={boards}
      renderItem={({ item: { id, name, thumbnailPhoto } }) => (
        <BoardsThumbnail
          id={id}
          thumbnailPhoto={thumbnailPhoto}
          name={name}
          navigation={navigation}
        />
      )}
      keyExtractor={(board) => board.id.toString()}
    />
  </View>
);

export default BoardsList;
