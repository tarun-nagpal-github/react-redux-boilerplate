import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux Library Packages 
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from "redux";

// Custom redux Elements 
import rootReducer from "./redux/reducers/index";
import { logger } from 'redux-logger';
import  rootSaga  from "./redux/sagas/index";

const sagaMiddleware = createSagaMiddleware();
const globalReducer = createStore(
  rootReducer,
  compose( 
    applyMiddleware(sagaMiddleware, logger)
  ));
  sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalReducer}>
       <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
