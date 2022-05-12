import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import TodoStore from "../../store/ToDoList";


const TodoInput = ({ todos }: { todos: TodoStore }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const handleButtonClick = () => {
        todos.add(newTodo);
        setNewTodo("");
    }
    return (
        <>
        
            <TextField value={newTodo} onChange={handleInputChange}></TextField>
            <Button onClick={handleButtonClick}>Add Todo</Button>
        </>
    )
}

export default TodoInput