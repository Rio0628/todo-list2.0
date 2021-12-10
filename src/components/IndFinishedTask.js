import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs'

const IndFinishedTask = (props) => {



    return (
        <div className='indFinishedTask'>
            <div className='returnTaskBtn' onClick={props.onClick} task={props.task._id}><BsArrowLeftSquareFill className='icon'/></div>

            { props.taskNameEdit ?
                <textarea className='taskNameInput' type='text' defaultValue={props.task.name} task={props.task._id}/>
            : <p className='taskName' onClick={props.onClick}>{props.task.name}</p> }
        </div>
    );
}

export default IndFinishedTask