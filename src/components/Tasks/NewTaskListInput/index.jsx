import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import data from '../../../services/dataImporter';

async function test(values, boardid) {
  const newTaskList = {
    id: 11,
    name: values.title,
    color: '#ffffff',
    boardId: boardid
  }

  data.lists.push(newTaskList);

  await alert('Created new task list!');
}

const NewTaskListInput = ({ boardId }) => (
  <Formik
    initialValues={{ title: 'Title' }}
    onSubmit={(values) => test(values, boardId)}
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View>
        <TextInput
          onChangeText={handleChange('title')}
          onBlur={handleBlur('title')}
          value={values.title}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default NewTaskListInput;
