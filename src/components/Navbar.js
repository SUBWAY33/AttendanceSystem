import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../img/logo.png';
import { auth } from '../config/config';
import { signOut } from '@firebase/auth';

const Navbar = ({ user,totalProducts }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login',{replace:true});
    });
  };
  return (
    <div className='navbar'>
      <div className='leftside'>
        <div className='logo'>
          <h1>📆 Attendance Managment System</h1>
        </div>
      </div>
      <div className='rightside'>
        {!user && (
          <>
            <div>
              <Link className='navlink nav-hover' to='signup'>
                SIGN UP
              </Link>
            </div>
            <div>
              <Link className='navlink nav-hover' to='login'>
                LOGIN
              </Link>
            </div>
          </>
        )}
        {user && (
          <>
            <div>
              <Link className='navlink nav-hover' to='/'>
            <i class="fa-solid fa-house-user"></i> Home
              </Link>
            </div>
            <div>
              <Link className='navlink nav-hover' to='/'>
              <i class="fa-solid fa-user"></i> {user}
              </Link>
            </div>

            <div>
            <Link className='navlink nav-hover' to='addstudent'>
            <i class="fa-solid fa-circle-plus"></i> Add Student
              </Link>
            </div>
            <div className='btn btn-danger btn-md' onClick={handleLogout}>
            <i class="fa-solid fa-power-off"></i> LOGOUT
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;