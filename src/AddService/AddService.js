import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import Singleriew from '../Review/Singleriew';
import CustomerReview from '../ServiceShowAll/CustomerReview';

const AddService = () => {
    const service = useLoaderData()
    const { img, name, short_description } = service
	const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
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
                        <Link to='/servicedetails'>
                        <button onClick={handleClick} className="btn btn-primary">Premimum<i class="fa-solid fa-right-long"></i></button>
                        </Link>
                    </div>
                </div>
                
            </div>
            <div>
            <div>
	</div>
</div>
<div>
                
            </div>
			<section className='bg-gray-800 py-10'>
                <div>
                    <CustomerReview></CustomerReview>
                </div>
                {
                    user && user?.uid
                        ?
                        <div>
                            {/* <ReviewForm service={service} refresh={refresh} setRefresh={setRefresh}></ReviewForm> */}
                        </div>
                        :
                        <div className='w-3/4 mx-auto my-5'>
                            <p className='text-white text-xl font-bold'>
                                Please <Link className='underline text-blue-600' to='/login'>login</Link> to add a review.
                            </p>
                        </div>
                }
                <div>
                    {
                        reviews.map(review => <Singleriew key={review._id} review={review}></Singleriew>)
                    }
                </div>
            </section>

        </div>
    );
};

export default AddService;