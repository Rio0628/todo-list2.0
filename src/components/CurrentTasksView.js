import React from 'react';
import { MdAddBox } from 'react-icons/md';
import { BsCheckSquareFill } from 'react-icons/bs';
import { IndTodoTask } from '../pages';

const CurrentTasksView = (props) => {
    let currentTasksCntr = [];
    
    if (props.todoTasks) {
        for (let i = 0; i < props.todoTasks.length; i++) {
            currentTasksCntr.push( <IndTodoTask currentTaskOpen={props.currentTaskOpen} task={props.todoTasks[i]} taskNameEdit={props.taskNameEdit} onClick={props.onClick} onChange={props.onChange} key={'IndTodoTask ' + i}/> );
        }
    }
    


    return (
        <div className='currentTasksCntr'>
            <div className='nav-bar'>
                <p className='headingApp'>Todo-List</p>

                <p className='dateDisplay'>month day | 00:00:00</p>
            </div>

            <div className='addTaskBar'>
                <input className='addTaskInput' placeholder='Add Task...' onChange={props.onChange}/>
                
                <p className='addTaskBtnLrg' onClick={props.addNewTask}>Add Task</p>
                <MdAddBox className='addTaskBtn' onClick={props.addNewTask}/>

                <BsCheckSquareFill className='viewFinishedTaskBtn' onClick={props.handleFinishedTsksView}/>
            </div>

            <div className='todoTasksCntr'>
                {currentTasksCntr}
            </div>
        </div>
    );
}

export default CurrentTasksView;