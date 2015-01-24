jest.dontMock('../scripts/components/List.js');
var React = require('react/addons'),
    Router = require('react-router'),
    TestUtils = React.addons.TestUtils,
    List = require('../scripts/components/List.js');

describe("List", function() {
    it("renders a List", function() {
        var list = TestUtils.renderIntoDocument(<List items={[]} />);
        expect(TestUtils.isCompositeComponent(list)).toEqual(true);
    });
});

