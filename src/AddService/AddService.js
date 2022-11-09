import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddService = () => {
    const service = useLoaderData()
    const { img, name, short_description } = service
    const handleClick = ()=>{
        toast.info('Yes your are service successfullay!',{autoClose:500})
    }
    return (
        <div>
            <div className="hero min-h-screen bg-lime-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl w-full h-full" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6 text-4xl text-orange-400">{short_description}</p>
                        <Link to='\login'>
                        <button onClick={handleClick} className="btn btn-primary">Premimum<i class="fa-solid fa-right-long"></i></button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;