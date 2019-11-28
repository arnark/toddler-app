import React from 'react';
import EditTaskListInput from '../../components/Tasks/EditTaskListInput';

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
      <EditTaskListInput
        taskListId={this.props.navigation.state.params.taskListId}
        taskListTitle={this.props.navigation.state.params.taskListTitle}
        taskListColor={this.props.navigation.state.params.taskListColor}
      />
    );
  }
}
