import { createStore, applyMiddleware } from "redux";
import rootReducer from "reducers/reducer";
// import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
// import createBrowserHistory from 'history/createBrowserHistory'

// const customHistory = createBrowserHistory()

/* Using thunk let's us return functions as actions
 * from action creators instead of JSON objects.
 * This enables us to delay dispatching actions.
 */

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
	if (process.env.NODE_ENV === "development")
	  return createStoreWithMiddleware(rootReducer,initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	else
		return createStoreWithMiddleware(rootReducer,initialState);
}

// export const history = syncHistoryWithStore(customHistory, configureStore());
// export default store;
