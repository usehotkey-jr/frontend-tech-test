// @flow

import React from "react";

/**
 * Shallow test snapshot
 * @param testFunc
 */
export function getCreateTestSnapshot<P> (testFunc: mixed) {
    return (Component: React.Component<P>, props: P) => {
        const wrapper = testFunc(<Component {...props} />);
        expect(wrapper).toMatchSnapshot();
        return wrapper;
    };
}

/* eslint-disable no-undef */
const testMount = getCreateTestSnapshot(mount);
const testRender = getCreateTestSnapshot(render);
const testShallow = getCreateTestSnapshot(mount);
/* eslint-enable no-undef */

export const createTestSnapshot = {
    all: <P>(Component: React.Component<P>, props: P) => {
        testMount(Component, props);
        testRender(Component, props);
        testShallow(Component, props);
    },
    mount: testMount,
    render: testRender,
    shallow: testShallow,
};
