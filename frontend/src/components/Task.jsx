import { TextField } from "@mui/material";
import React, { useState } from "react";
import { BasicButton } from "./BasicButton";

export const Task = () => {
    const [todoText, setTodoText] = useState(""); 
    // const [todoList, setNewTodoList] = useState([]);
    const [todoList, setTodoList] = useState([]);
    const message = "削除"
    const message2 = "追加";

    const onChangeTodoText = (event) => {
        setTodoText(event.target.value);
    };

    const onClickDelete = (index) => {
        const deletedTodoList = [...todoList];
        deletedTodoList.splice(index, 1);
        setTodoList(deletedTodoList);
      };

    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodo = {
          comment: todoText,
          status: "作業中"
        }
        // DOMが更新される
        const newTodoList = [...todoList, newTodo];
        // 新しいリストを状態として設定
        setTodoList(newTodoList);
        // 入力フォーム内を""にする
        setTodoText("");
    };

    return (
        <>
            <h1>タスク</h1>
            <div>
                <table>
                    <tbody id="todo-body">  
                        {todoList.map((todo, index) => (
                        <tr>
                            <td>{todo.comment}</td>
                            <td><BasicButton text = {message} onClick = {() => onClickDelete(index)}/></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <TextField
                    label = "taskの追加"
                    variant = "outlined"
                    value = {todoText}
                    onChange = {onChangeTodoText}
                /> 
                <BasicButton text = {message2} onClick = {onClickAdd}/>
            </div>
        </>
    );
};