import React from 'react';
import HeroSection from '../components/Homepage/HeroSection';
import AboutUs from '../components/Homepage/AboutUs';
import NewsletterForm from '../components/shared/NewsLetter/NewsLetter';
import OurService from '../components/Homepage/OurService';

const page = () => {
    return (
        <div>
            <HeroSection/>
            <AboutUs/>
            <OurService/>
            <NewsletterForm/>
        </div> 
    );
};

export default page;