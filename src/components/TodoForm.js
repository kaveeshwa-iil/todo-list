import React,{useState} from 'react'
// import './App.css';

function TodoForm(props) {
    //empty state
    const[input,setInput] = useState('');

    //Set input value 
    const handleChange = e =>{
        setInput(e.target.value);
    }


    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            //less likely to have the same id for lists.
            id : Math.floor(Math.random() * 1000 ),
            text: input
        });
        setInput('');

    };


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder= "Add a Todo" value={input} name = "text" className="todo-input" onChange={handleChange}/>

        
        <button className="todo-button">
            Add Todo
        </button>
        </form>
    )
}

export default TodoForm
