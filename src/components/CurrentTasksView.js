import React from 'react';
import { MdAddBox } from 'react-icons/md';
// import { AiTwotoneDelete } from 'react-icons/ai';
import { BsCheckSquareFill } from 'react-icons/bs'

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

                <BsCheckSquareFill className='viewFinishedTaskBtn'/>
            </div>

            <div className='todoTasksCntr'>

            </div>
        </div>
    );
}

export default CurrentTasksView;