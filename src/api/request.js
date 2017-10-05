// @flow

require("es6-promise").polyfill();
require("isomorphic-fetch");

export type Response<P> = {
    message: string,
    payload: P,
}

/**
 * Wrapper over fetch
 * @param url
 * @param method
 * @returns {Promise.<TResult>|Promise|*}
 */
export function request<P> (url: string, method: string): Promise<Response<P>> {
    return fetch(url, {method}).then(response => {
        const json = response.json();

        /*
        // console.log(response); // eslint-disable-line
        // json.then(console.log); // eslint-disable-line
        */

        return json;
    });
}
