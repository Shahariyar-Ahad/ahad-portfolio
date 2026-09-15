import React from 'react';
import AboutBanner from './components/AboutBanner';
import Photos from './components/Photos';
import AboutIntro from './components/AboutIntro';
import Education from './components/Education';

const About = () => {
    return (
        <div > 
            <section><AboutBanner></AboutBanner></section>
            
             <div className="mx-auto w-full max-w-[1040px] border-t-1 border-dashed border-gray-300" /> 
           <section>
            <Photos></Photos>
           </section>
             <div className="mx-auto w-full max-w-[1040px] border-t-1 border-dashed border-gray-300" /> 
           <section>
           <AboutIntro></AboutIntro>
           </section>
             <div className="mx-auto w-full max-w-[1040px] border-t-1 border-dashed border-gray-300" /> 
           <section>
           <Education></Education>
           </section>
        </div> 
    );
};

export default About;