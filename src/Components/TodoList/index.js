import * as S from './styles';
import Todo from '../TodoItem'

const TodoList = ({todos, toggleCompleteTodo, deleteTodo, ...props}) => {

    let completeCount = 0;
    for (let i=0;i<todos.length;i++) {
        if (todos[i].isComplete) {
            completeCount++;
        };
    }
    return (
        <>
            <S.Title>My todos: {completeCount} completed, left {todos.length-completeCount}</S.Title>
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
