import React, { useContext, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const ServiceCard = ({service}) => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
   const {name,img}=service
    return (

        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl bg-slate-900">
            <PhotoProvider>
                    <PhotoView src={img}>
                        <img role="presentation" className="object-cover w-3/4 h-72 lg:w-2/4 mx-auto rounded  bg-gray-500" src={img} alt='img' />
                    </PhotoView>
                </PhotoProvider>
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

    );
};

export default ServiceCard;