import React, { Component } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { findComponent } from 'findComponent';

class AppContainer extends Component {
  render() {
  	
  	const route = this.props.route
  	const childRoutes = route.routes;

    return (
      <div className="mb-container">
      <Switch>  
	      <Route  path="/" component={findComponent(childRoutes,"HomeContainer")} />
      </Switch>
      </div>
      
    );
  }
}

export default AppContainer;
