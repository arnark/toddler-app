import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import data from '../../../services/dataImporter';

async function test(values) {
  const newTaskList = {
    id: 11,
    name: values.title,
    thumbnailPhoto: values.thumbnailPhoto
  }

  data.boards.push(newTaskList);

  await alert('Created new board!');
}

const NewBoardInput = () => (
  <Formik
    initialValues={{ title: 'Title', thumbnailPhoto: 'https://i.kym-cdn.com/photos/images/newsfeed/001/090/170/192.png' }}
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
          onChangeText={handleChange('thumbnailPhoto')}
          onBlur={handleBlur('thumbnailPhoto')}
          value={values.thumbnailPhoto}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default NewBoardInput;
