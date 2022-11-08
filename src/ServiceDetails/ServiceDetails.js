import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {_id,img,price} =useLoaderData()

    const handleshow = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.for
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
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Order placed successfully')
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
                    <input name="email" type="text" placeholder="Your email" defaultValue className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full bg-green-500 " placeholder="Your Message" required></textarea>

                <input className='bg-orange-400 w-50 h-50'  type="submit" value="Place Your Service" />
            </form>
        </div>
            
        </div>
    );
};

export default ServiceDetails;