import  React, {useState} from "react";
import './App.css';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import Todo from './components/Todo'
function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status,setStatus] = useState('all');
  return (
    <div className="App">
        <header>Hello React</header>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus



        }/>
        <TodoList setTodos={setTodos} todos={todos} />

    </div>

  );
}

export default App;
