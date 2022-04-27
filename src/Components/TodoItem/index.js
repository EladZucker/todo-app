import * as S from './styles';
import "./Todo.css";

import XButton from '../../Images/XButton.png'
const Todo = ({id, text, isComplete, deleteTodo, toggleCompleteTodo, ...props}) => {

    const deleteTodoHandler = (event) => {
        event.stopPropagation();
        deleteTodo(id);
    }
    const toggleCompleteHandler = (event) => {
        toggleCompleteTodo(id);
    }
    return (

        <S.TodoWrapper>
            <input type="checkbox" onClick={toggleCompleteHandler} />
            <S.TodoText selected={isComplete}>
                {text}
                <S.XButton onClick={deleteTodoHandler}><img src={XButton} alt="delete" /></S.XButton>
            </S.TodoText>

        </S.TodoWrapper>
    )
}

export default Todo;