import React from 'react';
import Banner from '../Banner/Banner'
import useTitle from '../hooks/useTitle';
import Section1 from '../Section1/Section1';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    useTitle('Home')
    
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