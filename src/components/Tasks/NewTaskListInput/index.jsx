import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import data from '../../../services/dataImporter';

async function test(values) {
  const newTaskList = {
    id: 11,
    name: values.title,
    color: '#ffffff',
    boardId: 1
  }

  data.lists.push(newTaskList);

  await alert('Created new task list!');
}

const NewTaskListInput = () => (
  <Formik
    initialValues={{ title: 'Title' }}
    onSubmit={(values) => test(values)}
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
