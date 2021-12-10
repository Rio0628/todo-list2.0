import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs'

const IndFinishedTask = (props) => {
    return (
        <div className='indFinishedTask'>
            <BsArrowLeftSquareFill className='returnTaskBtn' onClick={props.onClick}/>

            { props.taskNameEdit ?
                <textarea className='taskNameInput' type='text' value='Task Name '/>
            : <p className='taskName' onClick={props.onClick}>Task Name</p> }

            {/*  */}

            
        </div>
    );
}

export default IndFinishedTask