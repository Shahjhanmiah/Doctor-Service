import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
   const {name,img}=service
    return (
<PhotoProvider>
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-slate-900">
                <PhotoView src={img}><img className='w-full h-80' src={img} alt="Shoes" /></PhotoView>
                <div className="card-body">
                    <h2 className="card-title text-white">Name:{name}</h2>
                    <div className="card-actions justify-end">
                     <Link to='/showall'>
                     <button className="btn btn-primary">Seall</button>
                     </Link>
                    </div>
                </div>
            </div>

        </div>
</PhotoProvider>
    );
};

export default ServiceCard;