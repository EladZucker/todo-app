import * as S from './styles';
import Todo from '../TodoItem'

const TodoList = ({todos, toggleCompleteTodo, deleteTodo, ...props}) => {
    return (
        <>
            <S.Title>My todos:</S.Title>
            {todos.map( (todo,idx) => {
                return <Todo key={idx} 
                             id={idx} 
                             isComplete={todo.isComplete} 
                             text={todo.text} 
                             deleteTodo={deleteTodo}
                             toggleCompleteTodo={toggleCompleteTodo} />
            })}
        </>
    );
} 

export default TodoList;
