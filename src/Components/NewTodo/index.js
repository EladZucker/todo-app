import * as S from './styles';
import { useState } from 'react'
const TodoForm = ({ addNewTodo, ...props}) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        addNewTodo({ text: todoValue, 
                 isComplete: false });
    }
    return (
        <>
            <S.TextInput type="text" 
                         placeholder="Write a new todo..." 
                         value={todoValue} 
                         onChange={(event) => setTodoValue(event.target.value)} />
            <S.Button onClick={addNewTodoHandler}>Add</S.Button>
        </>
    )
}

export default TodoForm;