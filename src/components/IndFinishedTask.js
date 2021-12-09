import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs'

const IndFinishedTask = () => {
    return (
        <div className='indFinishedTask'>
            <BsArrowLeftSquareFill className='returnTaskBtn'/>

            {/* <p className='taskName'>Task Name</p> */}

            <textarea className='taskNameInput' type='text' value='Task Name '/>
        </div>
    );
}

export default IndFinishedTask