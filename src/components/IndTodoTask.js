import React from 'react';
import { MdFileDownloadDone } from 'react-icons/md'

const IndTodoTask = (props) => {
    let nameEdit = false;
    const setDate = () => props.task.date ? props.task.date : '';

    if (props.currentTaskOpen === props.task._id) {
        nameEdit = props.taskNameEdit;
    }

    return (
        <div className='indTodoTask'>
            <div className='finishTaskBtn' onClick={props.onClick} task={props.task._id}><MdFileDownloadDone className='icon'/></div>

            { nameEdit ?
                <textarea className='taskNameInput' type='text' defaultValue={props.task.name} task={props.task._id} onChange={props.onChange}/>
            : <p className='taskName' onClick={props.onClick} task={props.task._id}>{props.task.name}</p> }

            {/* <p className='taskName' onClick={props.onClick}>Task Name</p> */}

            {/* <textarea className='taskNameInput' type='text' defaultValue='Task Name ' onChange={props.onChange}/> */}

            <input type='date' className='dateInput' value={setDate()} onChange={props.onChange}  task={props.task._id}/>

            <div className='removeTaskBtn' onClick={props.onClick} task={props.task._id}>Remove</div>
        </div>
    );
}

export default IndTodoTask;