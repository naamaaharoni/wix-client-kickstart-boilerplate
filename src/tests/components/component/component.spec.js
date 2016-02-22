define(['react', 'reactDOM', 'components/component/Component', 'components/Login/Login'],
    function (React, ReactDOM, Component, Login) {
        'use strict';

        var TestUtils = React.addons.TestUtils;

        describe('First Describe Block', function () {
            it('should work', function () {
                var instance = React.createElement(Component);
                var comp = TestUtils.renderIntoDocument(instance);
                var node = ReactDOM.findDOMNode(comp);
                TestUtils.Simulate.click(node);
                expect(comp.state.click).toEqual(true);
            });
        });
    });
