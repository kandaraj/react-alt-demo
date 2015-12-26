import React from 'react';

export default class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }
  render() {
    return (
      <div>
        <span className="task">c {this.props.task}</span>
      </div>
    );
  }
   
}
