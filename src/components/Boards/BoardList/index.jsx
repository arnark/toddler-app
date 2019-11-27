import React from 'react';
import { View, FlatList } from 'react-native';
import BoardsThumbnail from '../Thumbnail'


const BoardsList = ({ boards }) => (
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
