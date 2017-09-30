// @flow

/**
 * Check value on equality null or undefined
 * @param value
 * @returns {boolean}
 */
export function isNullOrUndefined (value: mixed): boolean {
    return value === null || value === undefined;
}
