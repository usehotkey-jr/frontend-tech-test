// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../../newTodo/newTodo.duck";
import {Description, Title} from "./TodoList.styled";
import {selectTodosList} from "./TodosList.selector";

type TodoListStateProps = {
    todos: Array<Todo>;
};

type TodoListDispatchProps = {
};

type TodoListProps = TodoListStateProps & TodoListDispatchProps;

export class TodoListComponent extends React.PureComponent<TodoListProps> {
    render () {
        const todosHtml = this.props.todos.map(todo => (
            <div key={todo.id}>
                <Title>{todo.title}</Title>
                <Description>{todo.description}</Description>
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
    }
)(TodoListComponent);
