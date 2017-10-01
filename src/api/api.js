// @flow

import type {Todo} from "../newTodo/newTodo.duck";
import type {Response} from "./request";
import {request} from "./request";
import {API_PATH} from "../../config/endpoints";

export class Api {
    getUrl (urlPath: Array<string>): string {
        return `${API_PATH}/${urlPath.join("/")}`;
    }

    create (params: Todo): Promise<Response<number>> {
        const url = this.getUrl(["task", "create", params.title, params.description]);
        return request(url, "POST");
    }

    getTasks (): Promise<Response<Array<Todo>>> {
        const url = this.getUrl(["tasks"]);
        return request(url, "GET");
    }
}
