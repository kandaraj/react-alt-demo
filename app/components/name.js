import React from 'react';
 

export default class Name extends React.Component {
   
  render() {
    return (
      <div>
        <span className="task">{this.props.note.name}</span>
      </div>
    );
  }
   
}
