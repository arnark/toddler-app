import React from 'react';
import { View, FlatList } from 'react-native';
import ListThumbnail from '../Thumbnail'

const BoardsList = ({ lists, navigation }) => (
  <View>
    <FlatList
      numColumns={1}
      data={lists}
      renderItem={({ item: { id, name, color } }) => {
        return (
          <ListThumbnail
            id={id}
            name={name}
            color={color}
            navigation={navigation}
          />
        )
      }}
      keyExtractor={(list) => list.id.toString()}
    />
  </View>
);

export default BoardsList;
