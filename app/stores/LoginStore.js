import alt from '../libs/alt';
import LoginActions from '../actions/LoginActions';
import assign from 'object-assign';

class LoginStore {

	constructor(){
		this.bindActions(LoginActions);
		this.note = {name : 'init name'};
		this.count = 0;
	}

	updatenote(newName){
		console.log(this.count);
		this.setState({
      note: newName,
      count: this.count + 1
    });
	}
};

export default alt.createStore(LoginStore,'LoginStore');			