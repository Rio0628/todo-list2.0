import React from 'react';
import { MdFileDownloadDone } from 'react-icons/md'

const IndTodoTask = (props) => {
    let nameEdit = false;

    // Function to show the date value of a task
    const setDate = () => props.task.date !== '' ? props.task.date : null;

    // Conditional to show the textarea of a task if the prop id is the same as the currentTaskOpen prop
    if (props.currentTaskOpen === props.task._id) {
        nameEdit = props.taskNameEdit;
    }

    return (
        <div className='indTodoTask'>
            <div className='finishTaskBtn' onClick={props.onClick} task={props.task._id}><MdFileDownloadDone className='icon'/></div>

            { nameEdit ?
                <textarea className='taskNameInput' type='text' defaultValue={props.task.name} task={props.task._id} onChange={props.onChange}/>
            : <p className='taskName' onClick={props.onClick} task={props.task._id}>{props.task.name}</p> }

            <input type='date' className='dateInput' value={setDate()} onChange={props.onChange}  task={props.task._id}/>

            <div className='removeTaskBtn' onClick={props.onClick} task={props.task._id}>Remove</div>
        </div>
    );
}

export default IndTodoTask;