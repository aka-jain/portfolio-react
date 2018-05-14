import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import storage from 'services/storageService';
import 'styles/header.scss'

class HeaderContainer extends Component {
  render() {
  	let userName;
  	if(storage.getCookieItem('userName')){
  		userName = storage.getCookieItem('userName');
  	}
  	
    return (
      <header>
		<div className="logo">
			MangoBoard
		</div>
		<div className="clear-fix"></div>
      </header>
      
    );
  }
}

// const mapStateToProps = (state) => {
// 	return{
// 		auth: state.auth
// 	}
// }

// const actions = {
//   ...authActions
// }

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(null, dispatch);
}

export default withRouter(connect(null, null)(HeaderContainer));
