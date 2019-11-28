import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as boardService from '../../../services/boardService';


const NewBoardInput = () => (
  <Formik
    initialValues={{ title: 'Title', thumbnailPhoto: 'https://i.kym-cdn.com/photos/images/newsfeed/001/090/170/192.png' }}
    onSubmit={(values) => boardService.createNewBoard(values)}
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
