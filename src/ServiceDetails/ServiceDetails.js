import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const ServiceDetails = () => {
    const {_id,img,price,data,time} =useLoaderData()
    const { user } = useContext(AuthContext);


    const handleshow = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.for
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const img = form.img.value

        console.log(name,message,img)

        const order = {
            service: _id,
            serviceName: 
            price,
            service: name,
            
            
            
        }

        fetch('http://localhost:5000/Orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('acknowledged ture!',{autoClose:500})
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <div>
            <form onSubmit={handleshow}>
                <h2 className="text-4xl">Our Service</h2>
                <h4 className="text-3xl"> </h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 bg-green-500'>
                    <input name="name" type="text" placeholder="name" className="input input-ghost w-full text-white  input-bordered" />
                    <input name="img" type="text" placeholder="img" className="input input-ghost w-full  input-bordered" />
                    <input name="service"  type="text" placeholder="service" className="input input-ghost w-full  input-bordered" required />
                    <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full bg-green-500 " placeholder="Your Message" required></textarea>
                <button type="submit" class="w-50 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> ServiceDetails</button>
            </form>
        </div>
            
        </div>
    );
};

export default ServiceDetails;