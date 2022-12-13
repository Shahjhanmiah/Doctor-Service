import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {

    const [service, Setservice] = useState([])
    useEffect(() => {
        fetch(' https://server-site-shahjhanmiah.vercel.app/Servicehome')
            .then(res => res.json())
            .then(data => Setservice(data))
    }, [])
    const handleshow = () => {
        console.log('click')

    }
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-red-400">Services</p>

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-20 my-20'>
                {
                    service.map(service => <ServiceCard key={service._id} service={service}
                        handleshow={handleshow}>

                    </ServiceCard>)
                }




            </div>
            <Link to='/showall'>
                <button className="btn btn-primary">Seall</button>
            </Link>
        </div>
    );
};

export default Service;