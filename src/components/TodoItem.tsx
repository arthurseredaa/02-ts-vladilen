import React from "react";
import { ITodo } from "./../interfaces";

interface ITodoWithFunctions extends ITodo {}

interface TodoProps {
  onToggle: (id: number) => void;
  onDelete: (Id: number) => void;
  completed: boolean;
  title: string;
  id: number;
}

export const TodoItem: React.FC<TodoProps> = ({
  title,
  id,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <li
      className="todo"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#ccc",
        padding: "10px 30px",
        margin: "20px 0",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        <p>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
            />
            <span></span>
          </label>
        </p>
        <p
          style={{
            textDecoration: `${completed ? "line-through" : "none"}`,
            margin: "0",
          }}
        >
          {title}
        </p>
      </div>
      <i
        className="material-icons red-text"
        style={{ cursor: "pointer" }}
        onClick={() => onDelete(id)}
      >
        delete
      </i>
    </li>
  );
};
