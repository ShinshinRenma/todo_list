import './App.css';
import { useState } from 'react';
import Form from './components/Form'



const todoList = [
        {
            taskname: "Get MERN black belt",
            isDone: false
        },
        {
            taskname: "Bench two plates",
            isDone: false
        },
        {
            taskname: "Continue being awesome",
            isDone: false
        },
    ]

function App() {

    const[todos, setTodos] = useState(todoList);

    const deleteChecked = (e) => {
        const newList = todos.filter(task => task.isDone===false);
        setTodos(newList);
    };
    

    const setIsDone = (e, i) => {
        const copyTodos = [...todos];
        if(copyTodos[i].isDone === true){
            copyTodos[i].isDone = false;
        } else if (copyTodos[i].isDone === false){
            copyTodos[i].isDone = true;
        }
        console.log(copyTodos[i].isDone);
        setTodos(copyTodos);
    }


    return (
    <div className="App">
        <h1>To Do List</h1>
        <Form todos={todos} setTodos={setTodos}/>
        {
        todos.map((t, i) => ( 
        <h2 key={i}>{t.taskname}<input type="checkbox" onChange={(e) => setIsDone(e.target.checked, i)}></input></h2>
        ))}
        <button onClick={deleteChecked}>Delete</button>
    </div>
  );
}

export default App;
