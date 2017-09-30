// @flow

/**
 * Factory to create jest expect for function
 * @param func
 * @returns {function(...[mixed[]])}
 */
export function createExpectFunc (func: (...args: mixed[]) => mixed) {
    return (...args: mixed[]) => expect(func(...args));
}
