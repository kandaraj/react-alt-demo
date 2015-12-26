import AltContainer from 'alt-container';
import React from 'react';
import Name from './name.js';
import LoginActions from '../actions/LoginActions';
import LoginStore from '../stores/LoginStore';
import alt from '../libs/alt';
import { connect } from 'alt-react';

class AltConnectToStoreExample extends React.Component {

	static getStores(){ return [LoginStore]}

	static getPropsFromStores() { return LoginStore.getState() }

  render() {
  	console.log(this.props)
    return (
      <div>
      	<h1>ConnectToStoreExample</h1>
        <button className="add-note" onClick={this.addNote}>-a</button>
        <div>
        	  {this.props.note.name}
        </div>
      </div>
    );
  }
  addNote() {
    LoginActions.updatenote({name : 'new name'});
  }
   
}

export default connect(AltConnectToStoreExample, {
  listenTo() {
    return [LoginStore]
  },

  getProps() {
    return {
      note: LoginStore.getState().note,
    }
  },
})