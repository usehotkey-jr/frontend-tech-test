// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../../newTodo/newTodo.duck";
import {Description, Title} from "./TodoList.styled";
import {selectTodosList} from "./TodosList.selector";
import type {ActionCreator} from "../../_helpers/types/redux";
import {removeTodo} from "../todos.thunk";

type TodoListStateProps = {
    todos: Array<Todo>;
};

type TodoListDispatchProps = {
    removeTodo: ActionCreator<number>;
};

type TodoListProps = TodoListStateProps & TodoListDispatchProps;

export class TodoListComponent extends React.PureComponent<TodoListProps> {
    createRemoveTodo = (id: number) => () => this.props.removeTodo(id);

    render () {
        const todosHtml = this.props.todos.map(todo => (
            <div key={todo.id}>
                <Title>{todo.title}</Title>
                <Description>{todo.description}</Description>
                <span onClick={this.createRemoveTodo(todo.id)}>x</span>
            </div>
        ));

        return (
            <div>
                {todosHtml}
            </div>
        );
    }
}

export const TodoList = connect(
    selectTodosList,
    {
        removeTodo,
    }
)(TodoListComponent);
