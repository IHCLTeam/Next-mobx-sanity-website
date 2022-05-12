import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import TodoStore from "../../store/ToDoList";
import TodoList from "../TodoList";


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

            <Box sx={{ marginBottom: 12,marginLeft:'40%'}}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        ToDo List
                    </Typography>
                </CardContent>

                <TextField value={newTodo} onChange={handleInputChange}></TextField>
                <Button onClick={handleButtonClick}>Add Todo</Button>
                <Box sx={{ margin: 'auto ' }}>
                    <TodoList todos={todos} />
                </Box>
            </Box>



        </>
    )
}

export default TodoInput