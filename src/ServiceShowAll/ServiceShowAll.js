import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceShowAll = ({service}) => {

    const {img,name,_id} = service
   

    return (
        
        <PhotoProvider>   
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-slate-900">
                <PhotoView src={img}><img className='w-full h-80' src={img} alt="Shoes" /></PhotoView>
                <div className="card-body">
                    <h2 className="card-title text-white">Name:{name}</h2>
                    <p className='text-white'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to={`/addservice/${_id}`}>
                 <button className="btn btn-primary text-white">ShowAll</button>
                 </Link>
                    </div>
                </div>
            </div>

        </div>
</PhotoProvider>
       

  
    );
};

export default ServiceShowAll;