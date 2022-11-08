import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {signin,signGoogle} = useContext(AuthContext)
    const handelLogin = event=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email,password)
        .then(result=>{
            const user = result.user
            console.log(user)
            toast.dark('successfullay login!',{autoClose:500})
        })
        .catch(error=>console.log(error))

    }
    const handelGoogleSign=()=>{
        signGoogle()
        .then(result=>{
            console.log(result.user);
            toast.dark('successfullay login!',{autoClose:500})

        })
        .catch(error => toast.error(error.message))
        //  github singin 
        
       
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10 bg-slate-600">
            <form onSubmit={handelLogin } className="card-body">
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
                  <input className="btn btn-warning" type="submit" value="Login"></input>
              
              </div>
              <button onClick={handelGoogleSign} type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <span className='caret-emerald-900 gap-4'><i class="fa-brands fa-google "></i></span> Google your account</button>
            </form>
            <p className='text-center text-bottom-4'>Already haven an accout  <Link className='text-orange-600' to='/sigin'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;