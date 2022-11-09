import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import ReviewAdd from '../ReviewAdd/ReviewAdd';

const Myreview = () => {
    const service = useLoaderData()
    const {user} = createContext(AuthContext) 
   const [review,setReview] = useState([])

   useEffect(()=>{
    fetch(`http://localhost:5000/Orders?email${user?.email}`)
    .then(res=>res.json())
    .then(data=>setReview(data))
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
                    toast.success('successfullay delete',{autoClose:500})
                    const remaining =review.filter(review => review._id !== id);
                    setReview(remaining);
                }
            })
    }

   } 
   const handleStatusUpdate = id =>{
    fetch(`https://y-phi-indol.vercel.app/orders/${id}`, {
        method: 'PATCH', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount > 0) {
            const remaining = review.filter(review =>review._id !== id);
            const approving = review.find(review => review._id === id);
            approving.status = 'Approved'
            const newOrders = [approving, ...remaining];
            setReview(newOrders);
        }
    })
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
                    handleDelete={handleDelete}
                    handleStatusUpdate={handleStatusUpdate}>

                    </ReviewAdd>)
                }
              
            </div>
        </div>
    );
};

export default Myreview;