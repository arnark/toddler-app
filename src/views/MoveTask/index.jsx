import React from 'react';
import TaskListPicker from '../../components/Task/TaskListPicker';

export default class NewBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.t = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    // Remove the event listener before removing the screen
    clearTimeout(this.t);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <TaskListPicker
        taskId={this.props.navigation.state.params.taskId}
      />
    );
  }
}
