import React from 'react';
import HeroSection from '../components/Homepage/HeroSection';
import AboutUs from '../components/Homepage/AboutUs';
import NewsletterForm from '../components/shared/NewsLetter/NewsLetter';
import OurService from '../components/Homepage/OurService';
import OurDoctor from '../components/Homepage/OurDoctor';

const page = () => {
    return (
        <div>
            {/* <OurDoctor/> */}
            <HeroSection/>
            <AboutUs/>
            <OurService/>
            <NewsletterForm/>
        </div> 
    );
};

export default page;