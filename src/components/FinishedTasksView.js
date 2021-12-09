import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { IndFinishedTask } from  '../pages';

const FinishedTasksView = () => {
    return (
        <div className='finishedTasksCntr'>
            <div className='returnBtn-headingCntr'>
                <div className='returnBtnCntr'>
                    <BiLeftArrow className='returnBtn'/>
                    <p className='returnBtnHeading'>Return</p>
                </div>

                <p className='finishedTasksHeading'>Finished</p>
            </div>

            <div className='indFnshdTasksCntr'>
                <IndFinishedTask />
                <IndFinishedTask />
                <IndFinishedTask />
                <IndFinishedTask />
            </div>
        </div>
    );
}

export default FinishedTasksView