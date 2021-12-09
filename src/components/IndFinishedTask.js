import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs'

const IndFinishedTask = (props) => {
    return (
        <div className='indFinishedTask'>
            <BsArrowLeftSquareFill className='returnTaskBtn' onClick={props.onClick}/>

            {/* <p className='taskName' onClick={props.onClick}>Task Name</p> */}

            <textarea className='taskNameInput' type='text' value='Task Name '/>
        </div>
    );
}

export default IndFinishedTask