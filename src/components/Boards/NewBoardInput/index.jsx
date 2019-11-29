import React from 'react';
import {
  View, TextInput, Text, TouchableHighlight, KeyboardAvoidingView, Alert
} from 'react-native';
import { Formik } from 'formik';
import * as boardService from '../../../services/boardService';
import styles from '../../../styles/styles'


const NewBoardInput = () => (
  <Formik
    initialValues={{ title: '', thumbnailPhoto: '' }}
    onSubmit={async (values) => {
      const status = await boardService.createNewBoard(values);
      if (status.status === false) {
        Alert.alert(status.message);
      } else {
        Alert.alert('Board created successfully!');
      }
    }}
  >
    {({
      handleChange, handleBlur, handleSubmit, values
    }) => (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.inputFieldLabel}>Board Title</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          <Text style={styles.inputFieldLabel}>Board Image URL</Text>
          <TextInput
            style={styles.inputField}
            onChangeText={handleChange('thumbnailPhoto')}
            onBlur={handleBlur('thumbnailPhoto')}
            value={values.thumbnailPhoto}
          />
        </View>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={60}>
          <TouchableHighlight onPress={handleSubmit}>
            <View style={styles.submitButton}>
              <Text style={styles.submitActionText}>Create Board</Text>
            </View>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    )}
  </Formik>
);

export default NewBoardInput;
