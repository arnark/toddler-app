import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as boardService from '../../../services/boardService';


const EditBoardInput = ({ boardId, boardTitle, boardThumbnailPhoto }) => (
  <Formik
    initialValues={{ boardTitle, boardThumbnailPhoto }}
    onSubmit={
      (values) => boardService.editBoard(boardId, values.boardTitle, values.boardThumbnailPhoto)
    }
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View>
        <TextInput
          onChangeText={handleChange('boardTitle')}
          onBlur={handleBlur('boardTitle')}
          value={values.boardTitle}
        />
        <TextInput
          onChangeText={handleChange('boardThumbnailPhoto')}
          onBlur={handleBlur('boardThumbnailPhoto')}
          value={values.boardThumbnailPhoto}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default EditBoardInput;
