import React, {  createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';



const Sigin = () => {
    const{createUser}=useContext(AuthContext)
    const handelSignup = event=>{
        event.preventDefault()
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;
   createUser(email,password)
        .then(result=>{
          console.log(result.user)
          toast.success('successfullay sigup!',{autoClose:500})

        })
        .catch(error=>console.log(error))
    }
 
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 bg-slate-600">
            <form onSubmit={handelSignup}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered"required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder=" You email" className="input input-bordered" required />
            
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Your Password" className="input input-bordered"required />
            
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Signup"></input>
              
              </div>
            </form>
            <p className='text-center text-bottom-4'>Already haven an accout  <Link className='text-orange-600' to='/login'>Sinup</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Sigin;