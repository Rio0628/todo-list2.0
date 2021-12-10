import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { IndFinishedTask } from  '../pages';

const FinishedTasksView = (props) => {

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
                <IndFinishedTask taskNameEdit={props.taskNameEdit} onClick={props.onClick} onChange={props.onChange}/>
                <IndFinishedTask />
                <IndFinishedTask />
                <IndFinishedTask />
            </div>
        </div>
    );
}

export default FinishedTasksView