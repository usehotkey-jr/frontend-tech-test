// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../newTodo/newTodo.duck";
import {newTodoActions} from "../newTodo/newTodo.duck";
import {selectNewTodo} from "../newTodo/newTodo.selector";
import {Button, Input} from "./TodoCreator.styled";

type TodoCreatorStateProps = {
    newTodo: Todo;
};

type TodoCreatorProps = typeof newTodoActions & TodoCreatorStateProps;

export class TodoCreatorComponent extends React.PureComponent<TodoCreatorProps> {
    makeOnChange = (key: string) => (event: SyntheticEvent<HTMLInputElement>) => {
        if (this.props.change) {
            this.props.change([key, event.currentTarget.value]);
        }
    };

    render () {
        const {newTodo} = this.props;

        return (
            <div>
                <Input onChange={this.makeOnChange("title")} value={newTodo.title}/>
                <Input onChange={this.makeOnChange("description")} value={newTodo.description}/>
                <Button onClick={this.props.add}>Add TODO</Button>
            </div>
        );
    }
}

export const TodoCreator = connect(
    selectNewTodo,
    newTodoActions
)(TodoCreatorComponent);
