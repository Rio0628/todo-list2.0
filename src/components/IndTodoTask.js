import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

const IndTodoTask = (props) => {
    
    return (
        <div className='indTodoTask'>
            <input type='checkbox' className='finishTaskBtn'/>

            {/* <p className='taskName' onClick={props.onClick}>Task Name</p> */}

            <textarea className='taskNameInput' type='text' value='Task Name '/>

            <input type='date' className='dateInput' />

            <AiTwotoneDelete className='removeTaskBtn' onClick={props.onClick}/>
        </div>
    );
}

export default IndTodoTask;