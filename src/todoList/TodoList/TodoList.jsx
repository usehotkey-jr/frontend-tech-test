// @flow

import React from "react";
import {connect} from "react-redux";
import type {Todo} from "../../newTodo/newTodo.duck";
import {Description, Title, TodoItem} from "./TodoList.styled";
import {selectTodosList} from "./TodosList.selector";
import type {TodoTitleOrDescriptionKey, UpdateTodoParams} from "../todos.thunk";
import {removeTodo, updateTodo} from "../todos.thunk";

type TodoListStateProps = {
    todos: Array<Todo>;
};

type TodoListDispatchProps = {
    removeTodo: (number) => void;
    updateTodo: (UpdateTodoParams) => void;
};

type TodoListProps = TodoListStateProps & TodoListDispatchProps;

export class TodoListComponent extends React.PureComponent<TodoListProps> {
    createRemoveTodo = (id: number) => () => this.props.removeTodo(id);

    createChangeTodo = (id: number, key: TodoTitleOrDescriptionKey, onServer: boolean) =>
        (event: SyntheticEvent<HTMLInputElement>) => {
            this.props.updateTodo([id, key, event.currentTarget.value, onServer]);
        };

    render () {
        const todosHtml = this.props.todos.map(todo => (
            <TodoItem key={todo.id}>
                <Title
                    value={todo.title}
                    onChange={this.createChangeTodo(todo.id, "title", false)}
                    onBlur={this.createChangeTodo(todo.id, "title", true)}
                />
                <Description
                    value={todo.description}
                    onChange={this.createChangeTodo(todo.id, "description", false)}
                    onBlur={this.createChangeTodo(todo.id, "description", true)}
                />
                <div onClick={this.createRemoveTodo(todo.id)}>x</div>
            </TodoItem>
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
        updateTodo,
    }
)(TodoListComponent);
