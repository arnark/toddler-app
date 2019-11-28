import React from 'react';
import { View, FlatList } from 'react-native';
import ListThumbnail from '../Thumbnail'

const TaskList = ({ tasks }) => (
  <View>
    <FlatList
      numColumns={1}
      data={tasks}
      renderItem={({ item: { id, name, description } }) => {
        return (
          <ListThumbnail
            name={name}
            description={description}
            id={id}
          />
        )
      }}
      keyExtractor={(task) => task.id}
    />
  </View>
);

export default TaskList;
