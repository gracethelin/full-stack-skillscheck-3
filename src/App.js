import React, {Component} from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import {Link} from 'react-router-dom';
import store from './ducks/Store'
import { withRouter } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth'
import Form from './components/Form/Form'
import Post from './components/Post/Post'
import Nav from './components/Nav/Nav'
import routes from './routes';


function App (props) {
        return (
            <Provider store={store}>
            <HashRouter>
                
                 <div className="App">
                 {/* {props.location.pathname === '/' && <Nav/>} */}

            <h1>Helo</h1>
                  
             <Link to='/' className='Links'>Home</Link>
             <Link to='/new' className='Links'>Register</Link>

            <Auth />
         
            </div>
        
            </HashRouter>
            </Provider>
        )
    }





export default App;
