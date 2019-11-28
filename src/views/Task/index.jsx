import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';
import NewTaskButton from '../../components/Task/NewTaskButton';
import TaskList from '../../components/Task/TaskList';
import * as taskService from '../../services/taskService';
import styles from './styles';


export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.t = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 100);
  }

  componentDidMount() {
    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      this.setState({ count: 0 });
    });
}

  componentWillUnmount() {
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
              taskService.getTasksByListId(this.props.navigation.state.params.listId)
             }
            />
          </ScrollView>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => { this.props.navigation.navigate('NewTask', { listId: this.props.navigation.state.params.listId }); }}
        >
          <NewTaskButton />
        </TouchableHighlight>
      </>
    );
  }
}
