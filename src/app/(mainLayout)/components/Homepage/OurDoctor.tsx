import React from 'react';
import DoctorCard from '../shared/DoctorCard/DoctorCard';

export default function OurDoctor() {
    return (
        <div className='primary-container flex-wra mx-auto flex min-h-screen'>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
        </div>
    )
}