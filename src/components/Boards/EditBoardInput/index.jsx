import React from 'react';
import {
  View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView
} from 'react-native';
import { Formik } from 'formik';
import * as boardService from '../../../services/boardService';
import styles from '../../../styles/styles'


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
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.inputFieldLabel}>Board Title</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('boardTitle')}
            onBlur={handleBlur('boardTitle')}
            value={values.boardTitle}
          />
          <Text style={styles.inputFieldLabel}>Board Image URL</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('boardThumbnailPhoto')}
            onBlur={handleBlur('boardThumbnailPhoto')}
            value={values.boardThumbnailPhoto}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
          <TouchableHighlight onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitActionText}>Edit Board</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )}
  </Formik>
);

export default EditBoardInput;
