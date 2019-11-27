import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import data from '../../../services/dataImporter';

async function test(values) {
  const newTask = {
    id: 11,
    name: values.title,
    description: values.description
  }

  data.tasks.push(newTask);

  await alert('Created new task!');
}

const NewTaskInput = () => (
  <Formik
    initialValues={{ title: 'Title', description: 'https://i.imgur.com/B5QGgs9.jpg' }}
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
        <TextInput
          onChangeText={handleChange('description')}
          onBlur={handleBlur('description')}
          value={values.description}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default NewTaskInput;
