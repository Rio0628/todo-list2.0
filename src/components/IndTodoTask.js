import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';

const IndTodoTask = () => {
    
    return (
        <div className='indTodoTask'>
            <input type='checkbox' className='finishTaskBtn'/>

            <p className='taskName'>Task Name</p>

            {/* <textarea className='taskNameInput' type='text' value='Task Name '/> */}

            <input type='date' className='dateInput' />

            <AiTwotoneDelete className='removeTaskBtn'/>
        </div>
    );
}

export default IndTodoTask;