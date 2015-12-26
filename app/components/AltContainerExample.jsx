import AltContainer from 'alt-container';
import React from 'react';
import Name from './name.js';
import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';

export default class AltContainerExample extends React.Component {
  render() {
    return (
      <div>
        <button className="add-note" onClick={this.addNote}>-a</button>
        <AltContainer  store={LoginStore} 
          render={function (props) {
				    return <div>{props.note.name}</div>
				  }}
				>
        </AltContainer>
      </div>
    );
  }
  addNote() {
    LoginActions.updatenote({name : 'new name'});
  }
   
}
