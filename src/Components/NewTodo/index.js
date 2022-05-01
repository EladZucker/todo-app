import * as S from './styles';
import { useState } from 'react'
const TodoForm = ({ addNewTodo, ...props}) => {
    const [todoValue, setTodoValue] = useState("");

    const addNewTodoHandler = (event) => {
        event.preventDefault()

        if (todoValue === "" ) {
            return;
        } 

        addNewTodo({ text: todoValue, 
                 isComplete: false });
                 setTodoValue("");
    }
    return (
        <>
            <form>
                <S.TextInput type="text" 
                            placeholder="Write a new todo..." 
                            value={todoValue} 
                            onChange={(event) => setTodoValue(event.target.value)} />
                <S.Button type="submit" onClick={addNewTodoHandler}>Add</S.Button>
            </form>
        </>
    )
}

export default TodoForm;