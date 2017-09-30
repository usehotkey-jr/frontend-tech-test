// @flow

import React from "react";

/**
 * Shallow test snapshot
 * @param component
 */
export function getCreateTestSnapshot<P> (testFunc) {
    return (Component: React.Component<P>, props: P) => {
        const wrapper = testFunc(<Component {...props} />);
        expect(wrapper).toMatchSnapshot();
    };
}

const testMount = getCreateTestSnapshot(mount);
const testRender = getCreateTestSnapshot(render);
const testShallow = getCreateTestSnapshot(mount);

export const createTestSnapshot = {
    all: <P>(Component: React.Component<P>, props: P) => {
        testMount(Component, props);
        testRender(Component, props);
        testShallow(Component, props);
    },
    mount: testMount,
    render: testRender,
    shallow: testShallow
};
