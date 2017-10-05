// @flow

import type {Todo} from "../newTodo/newTodo.duck";
import type {Response} from "./request";
import {request} from "./request";
import {API_URL} from "../../config/endpoints";

export class Api {
    apiUrl: string;

    constructor (apiPath?: string) {
        this.apiUrl = apiPath === undefined
            ? API_URL
            : apiPath;
    }

    getUrl (url: Array<string>): string {
        return `${this.apiUrl}/${url.join("/")}`;
    }

    create (todo: Todo): Promise<Response<number>> {
        const url = this.getUrl(["task", "create", todo.title, todo.description]);
        return request(url, "POST");
    }

    delete (taskId: number): Promise<Response<number>> {
        const url = this.getUrl(["task", "delete", String(taskId)]);
        return request(url, "DELETE");
    }

    getTasks (): Promise<Response<Array<Todo>>> {
        const url = this.getUrl(["tasks"]);
        return request(url, "GET");
    }
}
