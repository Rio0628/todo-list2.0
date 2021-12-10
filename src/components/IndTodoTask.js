import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

const IndTodoTask = (props) => {
    
    const setDate = () => props.task.date ? props.task.date : '';
console.log(props.task._id)
    return (
        <div className='indTodoTask'>
            <input type='checkbox' className='finishTaskBtn' onChange={props.onChange}  task={props.task._id}/>

            { props.taskNameEdit ?
                <textarea className='taskNameInput' type='text' defaultValue={props.task.name} task={props.task._id}/>
            : <p className='taskName' onClick={props.onClick} task={props.task._id}>{props.task.name}</p> }

            {/* <p className='taskName' onClick={props.onClick}>Task Name</p> */}

            {/* <textarea className='taskNameInput' type='text' defaultValue='Task Name ' onChange={props.onChange}/> */}

            <input type='date' className='dateInput' value={setDate()} onChange={props.onChange}  task={props.task._id}/>

            <div className='removeTaskBtn' onClick={props.onClick} task={props.task._id}>Remove</div>
        </div>
    );
}

export default IndTodoTask;