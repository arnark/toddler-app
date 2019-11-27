import React from 'react';
import { View, FlatList } from 'react-native';
import BoardsThumbnail from '../Thumbnail'
import Boards from '../../../views/Boards'

const BoardsList = ({ Boards }) => (
  <View>
    <FlatList
      numColumns={2}
      data={boards}
      renderItem={({ item: { thumbnailPhoto, name } }) => (
        <BoardsThumbnail thumbnailPhoto={thumbnailPhoto} name={name} />
      )}
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default BoardsList;
