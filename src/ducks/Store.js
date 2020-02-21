import React, {Component} from 'react'
import {createStore ,applyMiddleware} from 'redux'
import reducer from './Reducer'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware';
import App from '../App'

const store = createStore(reducer, applyMiddleware(promiseMiddleware))

// render (
//     <Provider store={store}>
//         <App />
//     </Provider>
// )

export default store