define([
        'lodash',
        'react',
        'reactDOM',
        'router',
        'components/PageHeader',
        'components/ErrorMsg',
        'components/MainApp',
        'components/LoginPage',
        'components/SignUpPage'
    ],
    function (_,
              React,
              ReactDOM,
              ReactRouter,
              PageHeader,
              ErrorMsg,
              MainApp,
              LoginPage,
              SignUpPage) {
        'use strict';

        var Router = ReactRouter.Router;
        var Route = ReactRouter.Route;

        return React.createClass({
            displayName: 'MainView',
            render: function () {
                return (
                    <Router>
                        <Route path="/" component={LoginPage}/>
                        <Route path="/signup" component={SignUpPage}/>
                        <Route path="/main" component={MainApp}/>
                    </Router>
                );
            }
        });
    });
