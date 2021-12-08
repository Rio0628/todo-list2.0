import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';


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

            </div>
        </div>
    );
}

export default FinishedTasksView