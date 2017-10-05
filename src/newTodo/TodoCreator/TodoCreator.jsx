// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../newTodo.duck";
import {newTodoActions} from "../newTodo.duck";
import {Button, Input} from "./TodoCreator.styled";
import {createNewTodo} from "../newTodo.thunk";
import {selectTodoCreatorProps} from "./TodoCreator.selector";

type TodoCreatorStateProps = {
    newTodo: Todo;
};

type TodoCreatorDispatchProps = {
    change: typeof newTodoActions.change;
    createNewTodo: typeof createNewTodo;
};

type TodoCreatorProps = TodoCreatorStateProps & TodoCreatorDispatchProps;

export class TodoCreatorComponent extends React.PureComponent<TodoCreatorProps> {
    makeOnChange = (key: string) =>
        (event: SyntheticEvent<HTMLInputElement>) =>
            this.props.change([key, event.currentTarget.value]);

    render () {
        const {newTodo} = this.props;

        return (
            <div>
                <Input onChange={this.makeOnChange("title")} value={newTodo.title}/>
                <Input onChange={this.makeOnChange("description")} value={newTodo.description}/>
                <Button onClick={this.props.createNewTodo}>Add TODO</Button>
            </div>
        );
    }
}

export const TodoCreator = connect(
    selectTodoCreatorProps,
    {
        change: newTodoActions.change,
        createNewTodo,
    }
)(TodoCreatorComponent);
