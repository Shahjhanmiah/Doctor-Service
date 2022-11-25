import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import Reviewsur from '../Showall/Reviewsur/Reviewsur';


const Review = () => {
    const [review, Setreview] = useState([])
   const service = useLoaderData()
   const{img ,name,price} = service

   const handleshow =()=>{
    toast.info('Yes your are service successfullay!',{autoClose:500})

   }
   
  
    return (
        <div>   
            <div>
           
           <div class="w-full max-w-sm bg-gray-800 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto bg-slate-700">
               <a href="#">
                   <img class="p-8 rounded-t-lg"src={img}  alt="product image"/>
               </a>
               <div class="px-5 pb-5">
                   <a href="#">
                       <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-white">Name:{name}</h5>
                   </a>
                   <a href="#">
                       <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-white">Price$:{price}</h5>
                   </a>
                   <div class="flex items-center mt-2.5 mb-5">
                       <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                       <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                   </div>
                   <button onClick={handleshow}>
                   <div class="flex justify-between items-center">
                       <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Success</a>
                   </div>
                   </button>
               </div>
           </div>
           
        </div>
        <div>
            
        </div>
        <div>
        <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex flex-col w-full">
		<h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
		<div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
			<div className="flex">
				<button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-yellow-500">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
				<button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 dark:text-gray-600">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
					</svg>
				</button>
			</div>
			<span className="dark:text-gray-400">3 out of 5</span>
		</div>
		<p className="text-sm dark:text-gray-400">861 global ratings</p>
		<div className="flex flex-col mt-4">
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">5 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
					<div className="dark:bg-orange-300 h-4 w-5/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">4 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
					<div className="dark:bg-orange-300 h-4 w-4/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">3 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
					<div className="dark:bg-orange-300 h-4 w-3/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">2 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
					<div className="dark:bg-orange-300 h-4 w-2/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
			</div>
			<div className="flex items-center space-x-1">
				<span className="flex-shrink-0 w-12 text-sm">1 star</span>
				<div className="flex-1 h-4 overflow-hidden rounded-sm dark:bg-gray-700">
					<div className="dark:bg-orange-300 h-4 w-1/6"></div>
				</div>
				<span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
			</div>
		</div>
	</div>
</div>
        </div>
            
        </div>
    );
};

export default Review;