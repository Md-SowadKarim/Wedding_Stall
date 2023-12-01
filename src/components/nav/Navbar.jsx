import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../authProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {
    const navigate=useNavigate()
    const{logOut,user}=useContext(AuthContext)
    const menu = (
        <>
          <li>
            
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
          
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
          
            <NavLink to="/fav">Favourite</NavLink>
          </li>
          <li>
           
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          
        </>
      );
      const handleLogoutClick = () => {
        logOut();
        navigate("/login");
        toast.success('Logout Sucessfully');
      };
    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" ml-3 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menu}
                {user?.email ? (
                <div className='flex items-center gap-2'>
                    <div>
                  <h1>
                  {user.displayName}
                  </h1>
                  
                    </div>
                    {
                      user.photoURL &&  
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                      <img src={user.photoURL}  />
                     </div>
                     </label> 
                    }
                     
                    <button className="btn btn-sm  btn-primary" onClick={handleLogoutClick}>
                  Logout
                </button>   
                </div>
             
            ) : (
                <Link to="/login">
                <button className="flex justify-start btn btn-sm  btn-secondary">Login</button>
              </Link>
            )}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl font-poppin text-blue-500">Weeding_Stall <hr className='h-1 bg-blue-500 w-[80%]'/></a>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}
           
            </ul>
          </div>
          <div className="max-md:hidden md:navbar-end">
          {user?.email ? (
                <div className='flex max-md:pl-5 md:items-center gap-2'>
                    <div>
                  <h1 className='uppercase'>
                  {user.displayName}
                  </h1>
                    </div>
                    {
                      user.photoURL &&  
                      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                      <img src={user.photoURL}  />
                     </div>
                     </label> 
                    }
                     
                    <button className="btn btn-sm  btn-primary" onClick={handleLogoutClick}>
                  Logout
                </button>   
                </div>
             
            ) : (
                <Link to="/login">
                <button className="btn btn-sm  btn-secondary">Login</button>
              </Link>
            )}
          </div>
        </div>
      );
    };

export default Navbar