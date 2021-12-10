import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs'

const IndFinishedTask = (props) => {
    let nameEdit = false;

    if (props.currentTaskOpen === props.task._id) {
        nameEdit = props.taskNameEdit;
    }


    return (
        <div className='indFinishedTask'>
            <div className='returnTaskBtn' onClick={props.onClick} task={props.task._id}><BsArrowLeftSquareFill className='icon'/></div>

            { nameEdit ?
                <textarea className='taskNameInput' type='text' defaultValue={props.task.name} task={props.task._id} onChange={props.onChange}/>
            : <p className='taskName' task={props.task._id} onClick={props.onClick}>{props.task.name}</p> }
        </div>
    );
}

export default IndFinishedTask