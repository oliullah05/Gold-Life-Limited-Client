import React from 'react';
import HeroSection from '../components/Homepage/HeroSection';
import AboutUs from '../components/Homepage/AboutUs';
import NewsletterForm from '../components/shared/NewsLetter/NewsLetter';
import OurService from '../components/Homepage/OurService';
import OurDoctor from '../components/Homepage/OurDoctor';

const page = () => {
    return (
        <div>

{/* <div className='w-20 h-20 rounded-full border ' style={{ background: 'conic-gradient(#076CEC 246deg, #fee800 246deg)' }}>
      
    </div> */}
            <HeroSection/>
            <AboutUs/>
            <OurService/>
            <NewsletterForm/>
            <OurDoctor/>
        </div> 
    );
};

export default page;