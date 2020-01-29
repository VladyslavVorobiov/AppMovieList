/**
 * @format
 */
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import watchFetchData from './src/saga/saga';

import rootReducer from './src/store/reducers/rootReducer';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchData);

const AppWithRedux = () => {
    return(
        <Provider store = {store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => AppWithRedux);
