import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
    return (
        <div>
          <div className="navbar bg-base-100 bg-yellow-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/home'>
     <li><a>Home</a></li>
     </Link>
     <Link to='/login'>
     <li><a>Login</a></li>
     </Link>

     <Link to='/Addservice'>
     <li><a>AddService</a></li>
     </Link>
     <Link to='/blog'>
     <li><a>Blog</a></li>
     </Link>
     <Link to='/servicedetails'>
     <li><a>ServiceDetails</a></li>
     </Link>
     <Link to='/myreview'>
     <li><a>Myreview</a></li>
     </Link>
        <li tabIndex={0}>
          <ul className="p-2">
            
          </ul>
        </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Our Doctor Service</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     <Link to='/home'>
     <li><a>Home</a></li>
     </Link>
     <Link to='/login'>
     <li><a>Login</a></li>
     </Link>

     <Link to='/Addservice'>
     <li><a>AddService</a></li>
     </Link>
     <Link to='/blog'>
     <li><a>Blog</a></li>
     </Link>
     <Link to='/servicedetails'>
     <li><a>servicedetails</a></li>
     </Link>
     <Link to='/myreview'>
     <li><a>Myreview</a></li>
     </Link>
      <li tabIndex={0}>
        <a>
          
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          
        </ul>
      </li>
      
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Header;