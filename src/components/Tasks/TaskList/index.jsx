import React from 'react';
import { View, FlatList } from 'react-native';
import ListThumbnail from '../Thumbnail'

const BoardsList = ({ lists }) => (
  <View>
    <FlatList
      numColumns={2}
      data={lists}
      renderItem={({ item: { name } }) => {
        return (
          <ListThumbnail
            name={name}
          />
        )
      }}
      keyExtractor={(list) => list.id}
    />
  </View>
);

export default BoardsList;
