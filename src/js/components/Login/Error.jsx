define(['lodash', 'react'], function (_, React) {
    'use strict';

    return React.createClass({
        render: function () {
            return <div className="error">{this.props.message}</div>;
        }
    });
});
