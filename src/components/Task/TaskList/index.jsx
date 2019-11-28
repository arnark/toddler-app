import React from 'react';
import { View, FlatList } from 'react-native';
import ListThumbnail from '../Thumbnail'

const TaskList = ({ tasks, navigation }) => (
  <View>
    <FlatList
      numColumns={1}
      data={tasks}
      renderItem={({ item: { id, name, description, isFinished } }) => {
        return (
          <ListThumbnail
            name={name}
            description={description}
            id={id}
            isFinished={isFinished}
            navigation={navigation}
          />
        )
      }}
      keyExtractor={(task) => task.id}
    />
  </View>
);

export default TaskList;
