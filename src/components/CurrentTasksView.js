import React from 'react';
import { MdAddBox } from 'react-icons/md';
import { BsCheckSquareFill } from 'react-icons/bs';
import { IndTodoTask } from '../pages';

const CurrentTasksView = () => {
    return (
        <div className='currentTasksCntr'>
            <div className='nav-bar'>
                <p className='headingApp'>Todo-List</p>

                <p className='dateDisplay'>month day | 00:00:00</p>
            </div>

            <div className='addTaskBar'>
                <input className='addTaskInput' placeholder='Add Task...'/>
                
                <p className='addTaskBtnLrg'>Add Task</p>
                <MdAddBox className='addTaskBtn'/>

                <BsCheckSquareFill className='viewFinishedTaskBtn'/>
            </div>

            <div className='todoTasksCntr'>
                <IndTodoTask />
                <IndTodoTask />
                <IndTodoTask />
                <IndTodoTask />
                <IndTodoTask />
            </div>
        </div>
    );
}

export default CurrentTasksView;