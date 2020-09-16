import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  const keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onAdd(value);
      setValue("");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        width: "100%",
        padding: "0 10em",
      }}
    >
      <label htmlFor="todo_input" className="active" style={{ width: "100%" }}>
        Введите название дела
        <input
          type="text"
          id="todo_input"
          placeholder="Введите название дела"
          value={value}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          autoComplete="off"
        />
      </label>
    </div>
  );
};
