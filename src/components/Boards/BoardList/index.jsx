import React from 'react';
import { View, FlatList } from 'react-native';
import BoardsThumbnail from '../Thumbnail'


const BoardsList = ({ boards, navigation }) => (
  <View>
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
      keyExtractor={(board) => board.id}
    />
  </View>
);

export default BoardsList;
