import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";

import TodoStore, { Todo } from "../../store/ToDoList";

const TodoList = ({ todos }: { todos: TodoStore }) => {
    return (
        <div>
            {todos.list.map(t => (
                <Typography key={t.id}>{t.title}
              
                </Typography>))}
        </div>
    )
}
export default observer(TodoList)