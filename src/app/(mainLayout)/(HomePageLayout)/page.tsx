import React from 'react';
import HeroSection from '../components/Homepage/HeroSection';
import AboutUs from '../components/Homepage/AboutUs';
import NewsletterForm from '../components/shared/NewsLetter/NewsLetter';

const page = () => {
    return (
        <div>
            <HeroSection/>
            <AboutUs/>
            <NewsletterForm/>
        </div> 
    );
};

export default page;