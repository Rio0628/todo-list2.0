import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { IndFinishedTask } from  '../pages';

const FinishedTasksView = (props) => {
    let finishedTasksCntr = [];

    // Conditional for bringing the current finished tasks to view 
    if (props.finishedTasks) {
        for (let i = 0; i < props.finishedTasks.length; i++) {
            finishedTasksCntr.push(<IndFinishedTask currentTaskOpen={props.currentTaskOpen} task={props.finishedTasks[i]} taskNameEdit={props.taskNameEdit} onClick={props.onClick} onChange={props.onChange} key={'FinishedTask ' + i}/>);
        }
    }

    // Conditional function to bring the finished tasks view up ( Smaller viewports )
    const handleFinishedTasksView = props.finishedTsksActive ? 'active' : '';

    return (
        <div className={'finishedTasksCntr ' + handleFinishedTasksView}>
            <div className='returnBtn-headingCntr'>
                <div className='returnBtnCntr' onClick={props.handleFinishedTsksView}>
                    <BiLeftArrow className='returnBtn'/>
                    <p className='returnBtnHeading'>Return</p>
                </div>

                <p className='finishedTasksHeading'>Finished</p>
            </div>

            <div className='indFnshdTasksCntr'>
                { finishedTasksCntr}
            </div>
        </div>
    );
}

export default FinishedTasksView