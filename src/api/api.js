// @flow

import type {Todo} from "../newTodo/newTodo.duck";
import type {Response} from "./request";
import {getUrl, request} from "./request";
import {API_PATH} from "../../config/config";

export class Api {
    getUrl (urlPath: Array<string>): string {
        return `${API_PATH}/${urlPath.join("/")}`;
    }

    create (params: Todo): Promise<Response<number>> {
        const url = this.getUrl(["task", "create", params.title, params.description]);
        return request(url, "POST");
    }

}

export const API = new Api();


