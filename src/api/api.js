// @flow

import type {Todo} from "../newTodo/newTodo.duck";
import type {Response} from "./request";
import {request} from "./request";
import {API_URL} from "../../config/endpoints";
import {replaceUrlLinebreaks} from "../_helpers/format/urlLinebreak";

export class Api {
    apiUrl: string;

    constructor (apiPath?: string) {
        this.apiUrl = apiPath === undefined
            ? API_URL
            : apiPath;
    }

    getUrl (url: Array<string>): string {
        return `${this.apiUrl}/${url.map(replaceUrlLinebreaks).join("/")}`;
    }

    create (todo: Todo): Promise<Response<number>> {
        const url = this.getUrl(["task", "create", todo.title, todo.description]);
        return request(url, "POST");
    }

    update (todo: Todo): Promise<Response<Todo>> {
        const url = this.getUrl(["task", "update", String(todo.id), todo.title, todo.description]);
        return request(url, "PUT");
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
