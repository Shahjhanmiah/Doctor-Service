import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Myreview from '../Myreview/Myreview';

const ReviewAdd = ({service}) => {
    const { img, name, short_description,price,_id,} = service
    const [review,setReview] = useState([])


    const handleDelete =(id)=>{
        const proceed = window.confirm('are you sure you want to orders delete button')
    if(proceed){
        fetch(` https://server-site-shahjhanmiah.vercel.app/Orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deleteCount>0){
                    toast.success('successfullay delete',{autoClose:500})
                    const remaining = review.filter(review => review._id !== id);
                    setReview(remaining);
                }
            })
        }
    }

    const handleStatusUpdate=id =>{
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
                toast.success('successfullay update',{autoClose:500})
                const remaining = review.filter(review =>review._id !== id);
                const approving = review.find(review => review._id === id);
                approving.status = 'Approved'
                const newOrders = [approving, ...remaining];
                setReview(newOrders);
            }
        })
    }
    
    return (
        <div className=''>
            
<div class="max-w-sm bg-slate-900 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 bg-slate-900 bg-slate-900">
    <a href="#">
        <img class="rounded-t-lg w-full h-80" src={img} alt=""/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price:{price}1</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 w-50 h-50"></p>
        <button onClick={()=> handleDelete(_id)}>
        <div href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </button>
       <Link to={`/review/${_id}`}>
       <button>
        <div href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Review
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </button>
       </Link>
        <br></br>
        <br></br>
        <button onClick={()=>handleStatusUpdate(_id)}>
        <div href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </div>
        </button>
    </div>
</div>

        </div>
    );
};

export default ReviewAdd;

// 
