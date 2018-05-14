import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import routesConfig from 'routesConfig';
import {renderRoutes} from 'react-router-config';
import configureStore from 'store/store'
import 'index.scss';
import ScrollToTop from 'components/core/scroll/ScrollToTop';

let initialState = {};
let store = configureStore(initialState);

store.dispatch({
  type: 'AUTH_VALIDATION'
})

render(
	<Provider store={store}>
		<Router basename="/">
		  <ScrollToTop>
				{renderRoutes(routesConfig)}
		  </ScrollToTop>
		</Router>
	</Provider>, document.getElementById('root')
);

// registerServiceWorker();
