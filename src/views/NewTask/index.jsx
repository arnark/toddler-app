import React from 'react';
import NewTaskInput from '../../components/Task/NewTaskInput';

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
      <NewTaskInput
        listId={this.props.navigation.state.params.listId}
      />
    );
  }
}
