// @flow

import {createApp} from "./app/createApp";

/**
 * Add two numbers.
 */
export function add (num1: number, num2: number): number {
    return num1 + num2;
}

createApp();
