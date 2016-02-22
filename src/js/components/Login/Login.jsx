define(['lodash', 'react', 'router', 'components/Login/Header', 'components/Login/Error'], function (_, React, ReactRouter, Header, Error) {
    'use strict';

    var History = ReactRouter.History;
    var LinkedStateMixin = React.addons.LinkedStateMixin;

    return React.createClass({
        displayName: 'Login',
        mixins: [LinkedStateMixin, History],
        getInitialState: function () {
            return {
                message: ''
            };
        },
        onLoginClick: function (event) {
            event.preventDefault();
            var data = JSON.parse(localStorage.getItem('markbook'));
            if (this.verifyUser(data)) {
                this.history.push('/home');
            } else {
                this.setState({
                    message: 'Email or password are incorrect'
                });
            }
        },
        verifyUser: function (data) {
            if (data !== null) {
                var password = data[this.refs.email.value];
                if (password && password === this.refs.password.value) {
                    return true;
                }
            }
            return false;
        },
        goToSignup: function () {
            this.history.push('/signup');
        },
        render: function () {
            return (
                <div>
                    <Header />
                    <form onSubmit={this.onLoginClick}>
                        <input type="email" placeholder="Email" className="input" ref="email"
                               required/>
                        <input type="password" placeholder="Password" ref="password"
                               className="input" required/>
                        <Error message={this.state.message}/>
                        <input type="submit" value="Login" className="input"/>
                    </form>
                    <div>Don't have an account? <a onClick={this.goToSignup}>Sign up</a></div>
                </div>
            );
        }
    });
});
