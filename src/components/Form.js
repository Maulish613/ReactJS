import React from "react";
//function Form() {} --> Which is the second method
const Form = ({setInputText,todos,setTodos,inputText,setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);

    };
    const submitTodosHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: inputText, completed:false, id: Math.random()*1000}
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
      console.log(e)
    };
    return(
        <form>
            <input value={inputText}
                   onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodosHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div onChange={statusHandler} className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>

        </form>

    );
};

export default Form;