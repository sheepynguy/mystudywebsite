import React, {useState} from 'react';
import './styling_components/Todo_list.css';
import db from './firebase';
import {collection , addDoc } from "firebase/firestore";

// https://www.freecodecamp.org/news/build-a-todo-app-from-scratch-with-reactjs/
// when I put this on the main page, I need to put this line 
// <Todo_list todos={[]}

function Todo_component(){
    const [todos, setTodos] = useState([]);
    return(
        <div className='wrapper'>
            <New_items setTodos={setTodos}/>
            <Todo_list todos={todos} setTodos={setTodos}/>
        </div>
    );

}

function New_items({setTodos}){
    const handleSubmit = async(e) => {
        e.preventDefault();
        const name = e.target.todo.value;
        const priority = e.target.priority.value;
        const course = e.target.courses.value;
        setTodos((prevTodos) => [
            ...prevTodos,
            {title: name, priority: priority, courses: course, is_completed: false}
        ]);

        //  This is the database section I am working on


        //


        e.target.reset();
    }
    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <div className='form-left'>
                <label htmlFor='todo'><input type='text' id="todo" name="todo" placeholder='Enter task name' maxLength='50'/></label>
                <label htmlFor='priority' className='priority-select'>
                    <select name='priority' id='priority' >
                        <option value="default">Priority level</option>
                        <option value="!!!">!!!</option>
                        <option value="!!">!!</option>
                        <option value="!">!</option>
                    </select>
                </label>
                <label htmlFor='courses'>
                    <select name='courses' id='courses'>
                        <option value="default">Select course</option>
                        <option value="ECE 363N">ECE 363N</option>
                        <option value="ECE 364D">ECE 364D</option>
                        <option value="ECE 360T">ECE 360T</option>
                        <option value="HIS 340R">HIS 340R</option>
                        <option value="HIS 319D">HIS 319D</option>
                    </select>
                </label>
            </div>
            <div className='form-right'>
                <button className='submit-button'>Submit</button>
            </div>
        </form>
    );
}

function Todo_list({todos, setTodos}) {

    return(
        <div className='todo_list'>
           <div className='item_list'>
            <ol className='list'>
                {todos && todos.length > 0 ? 
                (todos?.map((item, index) => <Item key={index} item={item} setTodos={setTodos}/>))
                :    
                ("No tasks at the moment")
                }
            </ol>
            </div>

        </div> 
    );
}

// Every instance of Item is going to be a list item, so you have to return it as a list item
function Item({item, setTodos}) {
    const completeTask = () => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) =>
                todo.title === item.title ?
                {...todo, is_completed: !todo.is_completed}
                :
                todo
            )
        );
    }

    const deleteTask = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.title !== item.title));
    }
    return(
        <li className='todo_item'>
            <button className='check-box' onClick={completeTask}>hi</button>
            <div className='item'>
                <p>{item?.title}</p>
                <div className='item-features'><p>{item?.priority}</p>&emsp;<p>{item?.courses}</p></div>
            </div>
            <div className='special-features'>
                <button className='delete-item' onClick={deleteTask}>delete</button>
            </div>
        </li>
    );
}




export default Todo_component;