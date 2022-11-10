import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviewsur = () => {
    const review = useLoaderData()
    const {img,name} = review
    return (
        <div>
            
        </div>
    );
};

export default Reviewsur;