// @flow


import type {Store} from "../../app/store";

export type ActionCreator<P> = (payload: P) => Action<P>;

export type Action<P> = {
    type: string;
    payload: P;
}

export type Dispatch = (Action<any>) => void;

export type GetState = () => Store;

export type Reducer<S> = (state: S, action: Action<mixed>) => S;
