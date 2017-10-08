// @flow

import {handleApiError} from "../errorHandling/errorHandling";

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
    const req = fetch(url, {method}).then(response => {
        if (!response.ok) {
            return response.json().then(json => Promise.reject(json));
        }

        /*
        // console.log(response); // eslint-disable-line
        // json.then(console.log); // eslint-disable-line
        */

        return response.json();
    });


    req.catch(handleApiError);

    return req;
}
