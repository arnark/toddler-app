
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import BoardsThumbnail from '../BoardsThumbnail'

const BoardsList = ({ boards }) => (
  <View style={{ flex: 7 }}>
    <FlatList
      numColumns={2}
      data={boards}
      renderItem={({ item: { thumbnailPhoto, name } }) => {
        return (
          <BoardsThumbnail thumbnailPhoto={thumbnailPhoto} name={name} />
        )
      }}
      keyExtractor={(board) => board.name}
    />
  </View>
);

export default BoardsList;
