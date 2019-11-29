import React, { Component } from 'react';
import {
  View, Button, Picker, Alert
} from 'react-native';
import * as taskListService from '../../../services/taskListService';
import * as taskService from '../../../services/taskService';


export default class TaskListPicker extends Component {
  constructor() {
    super();
    this.state = {
      PickerSelectedVal: 1
    }
  }

   moveItem = () => {
     if (typeof this.state.PickerSelectedVal !== 'undefined') {
       taskService.moveTask(this.props.taskId, this.state.PickerSelectedVal);
       Alert.alert('Item moved successfully!');
     } else {
       Alert.alert('Something went wrong. Please try again.');
     }
   }

   render() {
     const allTasks = taskListService.getAllTaskListsAsKeyValuePairs();

     return (
       <View>
         <Picker
           selectedValue={this.state.PickerSelectedVal}
           onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue })}
         >
           {Object.keys(allTasks).map((key) => {
             return (<Picker.Item label={allTasks[key]} value={key} key={key} />)
           })}
         </Picker>
         <Button title="Move to selected place" onPress={this.moveItem} />
       </View>
     );
   }
}
