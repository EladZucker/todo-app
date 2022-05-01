import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
import { useState } from 'react';

import TodoForm from './Components/NewTodo';

import * as S from './styles';
import memoImage from './Images/memo.png';
import footerImage from './Images/footer.png';

function App() {

  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);  
    setTodos(newTodos);
  }

  const ToggleComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isComplete = !newTodos[id].isComplete;
    setTodos(newTodos);
  }

  console.log(memoImage);
  return (
    <S.AppContainer>
      <S.Header>
        <img src={memoImage} alt="memo" />
        <S.Title>To Do List</S.Title>
      </S.Header>
      <S.Container>
        <TodoList todos={todos} 
                  deleteTodo={deleteTodo} 
                  toggleCompleteTodo={ToggleComplete}/>
        <TodoForm addNewTodo={addNewTodo}/>
        
      </S.Container>
      <S.Footer><img src={footerImage} alt="Fotter" /></S.Footer>
    </S.AppContainer>
  );
}

export default App;
