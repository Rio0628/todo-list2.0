import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

const IndTodoTask = (props) => {
    
    return (
        <div className='indTodoTask'>
            <input type='checkbox' className='finishTaskBtn' onChange={props.onChange}/>

            { props.taskNameEdit ?
                <textarea className='taskNameInput' type='text' value='Task Name '/>
            : <p className='taskName' onClick={props.onClick}>Task Name</p> }

            {/* <p className='taskName' onClick={props.onClick}>Task Name</p> */}

            {/* <textarea className='taskNameInput' type='text' defaultValue='Task Name ' onChange={props.onChange}/> */}

            <input type='date' className='dateInput' onChange={props.onChange}/>

            <AiTwotoneDelete className='removeTaskBtn' onClick={props.onClick}/>
        </div>
    );
}

export default IndTodoTask;