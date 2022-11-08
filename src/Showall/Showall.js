import React, { useEffect, useState } from 'react';
import ServiceShowAll from '../ServiceShowAll/ServiceShowAll';


const Showall = () => {
 
    const [service,Setservices]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res =>res.json())
        .then(data =>Setservices(data))
    },[])
   
   
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-red-400">Services</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-20 my-20'>
                {
                    service.map(service=><ServiceShowAll key={service._id}
                    service={service}>

                    </ServiceShowAll>)
                }
            </div>
        </div>
          
    );
};

export default Showall;