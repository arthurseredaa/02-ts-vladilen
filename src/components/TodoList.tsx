import React from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "./../interfaces";

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
}) => {
  return (
    <ul
      style={{
        width: "100%",
        padding: "20px 10em",
        margin: "0",
      }}
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              title={todo.title}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          );
        })
      ) : (
        <h5 style={{ color: "#000", textAlign: "center" }}>
          Your list is empty!
        </h5>
      )}
    </ul>
  );
};
