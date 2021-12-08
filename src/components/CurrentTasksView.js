import React from 'react';
import { MdAddBox } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';

const CurrentTasksView = () => {
    return (
        <div className='currentTasksCntr'>
            <div className='nav-bar'>
                <p className='headingApp'>Todo-List</p>

                <p className='dateDisplay'>month day | 00:00:00</p>
            </div>

            <div className='addTaskBar'>
                <input className='addTaskInput' placeholder='Add Task...'/>
                
                {/* <p className='addTaskBtn'>Add Task</p> */}
                <MdAddBox className='addTaskBtn'/>

                <AiTwotoneDelete className='viewErasedTaskBtn'/>
            </div>

            <div className='todoTasksCntr'>

            </div>
        </div>
    );
}

export default CurrentTasksView;