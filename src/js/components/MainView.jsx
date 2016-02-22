define(['lodash', 'react', 'components/Login/Login'], function (_, React, Login) {
    'use strict';

    return React.createClass({
        displayName: 'MainView',

        render: function () {
            return (
                <div>
                    <Login />
                </div>
            );
        }
    });
});
