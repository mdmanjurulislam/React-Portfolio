import React, { useState } from 'react';
import './experience.css';
import ExperienceCard from './experienceCard/ExperienceCard';


const experienceItems = [
    {
        date: '01-01-2018',
        market: 'Envato Market',
        heading: 'Web Designer',
        description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    },
    {
        date: '02-02-2028',
        market: 'Envato Market',
        heading: 'Web Developer',
        description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    },
    {
        date: '01-01-2028',
        market: 'Envato Market',
        heading: 'UI/UX Designer',
        description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    },
    {
        date: '01-01-2028',
        market: 'Envato Market',
        heading: 'javaScript Developer',
        description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    },
    {
        date: '01-01-2028',
        market: 'Envato Market',
        heading: 'React Js Developer',
        description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    },
    {
        date: '01-01-2028',
        market: 'Envato Market',
        heading: 'Java/Spring Boot Developer',
        description: 'Website development is the process of building, programming, coding and maintaining websites and web applications.'
    },
]

const Experience = () => {
    const [services,setServices]=useState([]);
    
    
    const handleAddService = (service) => {
        const newServices = [...services,service];
        setServices(newServices);
        // console.log(service.length);
    }

    return (
        <div className='container '>
            <div className="experience-heading">
                <h4>Experiences</h4>
                <h1>Everything About Me!</h1>
            </div>
            <div className="experience-card-main custom-margin">
                {
                    experienceItems.map(expItem =>
                        <ExperienceCard
                            experienceItems={expItem}
                            handleAddService={handleAddService}
                            key={expItem.heading}
                            services ={services}
                            >
                        </ExperienceCard>
                    )
                }
            </div>
            <div>
                <div>
                    {
                        services.map(ser =>
                            <li key={ser.experienceItems.heading}>{ser.experienceItems.heading}</li>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Experience;