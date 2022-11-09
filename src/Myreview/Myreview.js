import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import ReviewAdd from '../ReviewAdd/ReviewAdd';

const Myreview = () => {
    const service = useLoaderData()
    const {user} = createContext(AuthContext) 
   const [myreview,setMyreview] = useState([])

   useEffect(()=>{
    fetch(`http://localhost:5000/Orders?email${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyreview(data))
   },[user?.email])

   const handleDelete=id=>{
    const proceed = window.confirm('are you sure you want to orders delete button')
    if(proceed){
        fetch(`http://localhost:5000/Orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deleteCount>0){
                    alert('deleted successfullay')
                    const remaining = myreview.filter(odr => odr._id !== id);
                    setMyreview(remaining);
                }
            })
    }

   } 

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-red-400">Services</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-20 my-20'>
                {
                    service.map(service=><ReviewAdd key={service._id}
                    service={service}
                    handleDelete={handleDelete}>

                    </ReviewAdd>)
                }
              
            </div>
        </div>
    );
};

export default Myreview;