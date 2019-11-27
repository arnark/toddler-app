import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewTaskButton from '../../components/Task/NewTaskButton';
import TaskList from '../../components/Task/TaskList';
import * as dataService from '../../services/dataImporter';
import styles from './styles';


export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.t = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({ count: 0 });
    });
}

  componentWillUnmount() {
  // Remove the event listener before removing the screen from the stack
    this.focusListener.remove();
    clearTimeout(this.t);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <>
        <TouchableHighlight
          style={styles.container}
        >
          <ScrollView style={styles.mainContent}>
            <TaskList tasks={
              dataService.getTasksByListId(this.props.navigation.state.params.listId)
             }
            />
          </ScrollView>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => { this.props.navigation.navigate('NewTask'); }}
        >
          <NewTaskButton />
        </TouchableHighlight>
      </>
    );
  }
}
