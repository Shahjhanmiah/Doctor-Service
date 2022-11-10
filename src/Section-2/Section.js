import React from 'react';
import img1 from '../asserst/img/img5.svg'

const Section = () => {
    return (
        <div>

            <div className="hero min-h-screen bg-block">
                <div className="hero-content flex-col lg:flex-row bg-black">
                    <img src="https://media.istockphoto.com/id/1161445847/photo/full-body-portrait-of-happy-smiling-doctor-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bzXfypeUH5hcxv33XVgAcL3JmQ3-w25zvT7Y8OZUVAA=" className="max-w-sm rounded-lg shadow-2xl w-full h-full" />
                    <div>
                        <h1 className="text-5xl font-bold text-white">Doctor Office News!</h1>
                        <p className="py-6 text-white">For people with stable chest pain, a personalized "precision" testing approach led to more efficient evaluations for heart disease risk and improved diagnosis and treatment of coronary artery disease when compared to usual care, according to late-breaking science presented today at the American Heart Association's Scientific Sessions 2022..</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Section;
