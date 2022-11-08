import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
   const {name,img}=service
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-80' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                     <Link to='/showall'>
                     <button className="btn btn-primary">ShowAll</button>
                     </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;