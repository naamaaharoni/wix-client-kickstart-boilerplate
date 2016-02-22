requirejs.config({
    paths: {
        lodash: '../vendor/lodash',
        react: '../vendor/react',
        reactDOM: '../vendor/react-dom',
        router: 'https://cdnjs.cloudflare.com/ajax/libs/react-router/2.0.0/ReactRouter'
    },
    map: {
        '*': {
            React: 'react'
        }
    },
    shim: {
        lodash: {
            exports: '_'
        },
        React: {
            exports: 'react'
        },
        reactDom: ['react']
    }
});

requirejs(['lodash', 'react', 'reactDOM', 'router', 'components/Login/Login', 'components/Login/Signup'],
    function (_, React, ReactDOM, ReactRouter, Login, Signup) {
        'use strict';

        var Router = ReactRouter.Router;
        var Route = ReactRouter.Route;

        var mountPoint = document.getElementById('app');
        var routes = (
            <Router>
                <Route path="/" component={Login}/>
                <Route path="/signup" component={Signup}/>
            </Router>
        );

        ReactDOM.render(routes, mountPoint);
    }
);
