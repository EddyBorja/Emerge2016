import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import rootReducer from '/redux/reducers/rootReducer';
import { syncHistoryWithStore } from 'react-router-redux';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
}

const reducer = rootReducer;

const composedStore = compose(
    applyMiddleware(
        thunk, 
        logger(),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

//Pass store to the Provider component "store" prop when rendering
const store = composedStore(reducer, initialState);

const syncedHistory = syncHistoryWithStore(browserHistory, store);
syncedHistory.listen(location => console.log("Go to ", location.pathname));


import App from './components/App.jsx';
import Index from './components/Index.jsx';
import AppNotFound from './components/AppNotFound.jsx';

var Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="*" component={AppNotFound}/>
    </Route>
)



import injectTapEventPlugin from 'react-tap-event-plugin';
// The above is Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin

Meteor.startup(function() {
    console.log("Inject Tap Event Plugin");
    injectTapEventPlugin();

    render(
        <Provider store={store}>
            <Router history={syncedHistory}>
                {Routes}
            </Router>
        </Provider>
        , document.getElementById('app')
    );
});
