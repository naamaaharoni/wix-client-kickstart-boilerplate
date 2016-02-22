define(['lodash', 'react', 'router', 'components/Login/Header', 'components/Login/Error'], function (_, React, ReactRouter, Header, Error) {
    'use strict';

    var History = ReactRouter.History;
    var LinkedStateMixin = React.addons.LinkedStateMixin;

    return React.createClass({
        mixins: [LinkedStateMixin, History],
        getInitialState: function () {
            return {
                email: '',
                password: '',
                rePassword: '',
                message: ''
            };
        },
        checkIsNewUser: function () {
            var data = JSON.parse(localStorage.getItem('markbook'));
            if (data) {
                var password = data[this.state.email];
                return _.isUndefined(password);
            }
            return true;
        },
        checkIsValidUser: function () {
            var email = this.state.email;
            var password = this.state.password;
            var rePassword = this.state.rePassword;
            var message = '';
            if (!this.checkIsNewUser(email)) {
                message = 'User already exists';
            } else if (password.length < 6) {
                message = 'Password should be at least 6 characters long';
            } else if (password !== rePassword) {
                message = 'Passwords do not match';
            }
            return message;
        },
        saveUserToLocalStorage: function () {
            var data = JSON.parse(localStorage.getItem('markbook'));
            data = data || {};
            data[this.state.email] = this.state.password;
            localStorage.setItem('markbook', JSON.stringify(data));
        },
        signUser: function (event) {
            event.preventDefault();
            var message = this.checkIsValidUser();
            if (message) {
                this.setState({
                    message: message
                });
            } else {
                this.saveUserToLocalStorage();
                this.history.push('/home');
            }
        },
        goToLogin: function () {
            this.history.push('/');
        },
        render: function () {
            return (
                <div>
                    <Header />
                    <form onSubmit={this.signUser}>
                        <input type="email" placeholder="Enter your email" valueLink={this.linkState('email')}
                               className="input"
                               required/>
                        <input type="password" placeholder="Choose password" valueLink={this.linkState('password')}
                               className="input"
                               required/>
                        <input type="password" placeholder="Repeat password" valueLink={this.linkState('rePassword')}
                               className="input"
                               required/>
                        <Error message={this.state.message}/>
                        <input type="submit" className="input" value="Create Account"/>
                    </form>
                    <div>Have an account? <a onClick={this.goToLogin}>Log in</a></div>
                </div>

            );
        }
    });
});
