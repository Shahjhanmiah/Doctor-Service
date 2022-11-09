import React from 'react';

const Errorpage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        
        <div className='max-w-md text-center'> 
          <h2 className='mb-8 font-extrabold text-9xl text-orange-600'>
            <span className='sr-only'>Error</span>404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8 text-red-600'>
            How Create a no route  match and this is error  page
          </p>
          
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Errorpage;