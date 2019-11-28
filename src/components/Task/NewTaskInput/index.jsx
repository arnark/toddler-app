import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as taskService from '../../../services/taskService';


const NewTaskInput = ({ listId }) => (
  <Formik
    initialValues={{ title: 'Title', description: 'https://i.imgur.com/B5QGgs9.jpg' }}
    onSubmit={(values) => taskService.createNewTask(values, listId)}
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
