import React from 'react';
import JobCard from './JobCard/JobCard';
import { jobsArr } from './jobs'

import './MyJobs.css'



const MyJobs = () => {

    return (
        <div className="MyJobs">
            {
                jobsArr.map((i, index) => (
                    <div key={index} className="MainWrapper">
                        <JobCard i={i} />
                    </div>
                ))
            }
        </div>
    );
}

export default MyJobs;