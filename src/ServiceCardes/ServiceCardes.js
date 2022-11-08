import React from 'react';

const ServiceCardes = () => {

    const handleSubmit=event=>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const message = form.message.value;
        console.log("click");
    }
    return (
        <div >

<div className="hero min-h-screen bg-base-200">
  <form onSubmit={handleSubmit} className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="name" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">img</span>
          </label>
          <input type="img" placeholder="img" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service</span>
          </label>
          <input type="service" placeholder="Service" className="input input-bordered" />
        </div>
        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Decription</button>
        </div>
      </div>
    </div>
  </form>
</div>
        </div>
    );
};

export default ServiceCardes;