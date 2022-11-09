import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <br></br>
            <Section1></Section1>
            
        </div>
    );
};

export default Home;