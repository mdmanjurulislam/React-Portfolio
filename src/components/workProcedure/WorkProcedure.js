import React from 'react';
import './WorkProcedure.css';
import timeManagement from '../banner/images/time-management.png';

const workItems = [
    {
        id: '01',
        procedure: 'Dedication',
        icon: timeManagement,
        description: 'Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.'
    },
    {
        id: '02',
        procedure: 'Smart Work',
        icon: timeManagement,
        description: 'Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.'
    },
    {
        id: '03',
        procedure: 'Intelligence',
        icon: timeManagement,
        description: 'Sed do eiusmod tempor incididunt ut labore ullamco laboris nisi ut aliquip ex ea commo do conse namber onequat.'
    },
]

const WorkProcedure = () => {
    return (
        <div className='container'>
            <div className="work-card-main">
                {
                    workItems.map(workItem =>
                        <div className='work-card' key={workItem.id}>
                            <h4>{workItem.id}</h4>
                            <div className="work-heading">
                                <h2>{workItem.procedure}</h2>
                                <div className="work-icon">
                                    <img src={workItem.icon} alt="icon" />
                                </div>
                            </div>
                            <p>{workItem.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WorkProcedure;