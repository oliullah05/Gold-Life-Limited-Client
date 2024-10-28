import React from 'react';
import DoctorCard from '../shared/DoctorCard/DoctorCard';

export default function OurDoctor() {
    return (
        <div className='primary-container mx-auto flex'>
            <DoctorCard/>
            <DoctorCard/>
            <DoctorCard/>
        </div>
    )
}