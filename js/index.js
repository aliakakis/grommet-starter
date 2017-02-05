import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRedirect, hashHistory} from 'react-router';

import {Provider} from 'mobx-react';

import App from './app/App';
import Home from './components/home/Home';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';

import CommonUIStore from './stores/CommonUIStore';
import LoginStore from './stores/LoginStore';
import SignUpStore from './stores/SignUpStore';

const store = {
    commonUIStore: new CommonUIStore(),
    loginStore: new LoginStore(),
    signUpStore: new SignUpStore()
};

ReactDOM.render((
    <Provider {...store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home" />
                <Route path="home" component={Home} />
                <Route path="login" component={Login} />
                <Route path="signup" component={SignUp} />
            </Route>
        </Router>
    </Provider>
), document.querySelector('#inductorsApp'));