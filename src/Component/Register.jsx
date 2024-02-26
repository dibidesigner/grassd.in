import React from 'react';
import Navbar from './Navabar';
// import ".//static/register.css";
import Footer from './Footer';
import Navbarspace from './Navbarspace';
import Search from './Search';
import { BiSolidUser } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";




function Register() {
  return (
    <>
      <div>
        <Navbar />
        <Navbarspace />
        <Search />
        <Navbarspace />
        <div className='registerbackground'>
              <div className='registrationtitle'>
                <label>Registration Form</label>
              </div>
              <div className='registrationform'>
                <form className='regform'>
                <div className='inputform'>
                  <div className='leftpart'>
                      <div className='enterid'>
                        <div className='iconcover'>
                        <BiSolidUser />
                        </div>   
                        <input type='text' placeholder='Enter user id' />
                      </div>
                      <div className='enterid'>
                        <div className='iconcover'>
                        <FaUserAlt />
                        </div>   
                        <input type='text' placeholder='Enter full name' />
                      </div>
                      <div className='enterid'>
                        <div className='iconcover'>
                        <MdCall />
                        </div>   
                        <input type='text' placeholder='Enter mobile number' />
                      </div>
                  </div>
                  <div className='leftpart'>
                      <div className='enterid'>
                        <div className='iconcover'>
                        <IoMail />
                        </div>   
                        <input type='text' placeholder='Enter email id' />
                      </div>
                      <div className='enterid'>
                        <div className='iconcover'>
                        <IoIosLock />
                        </div>   
                        <input type='text' placeholder='Enter password' />
                      </div>
                      <div className='enterid'>
                        <div className='iconcover'>
                        <IoIosLock />
                        </div>   
                        <input type='text' placeholder='Enter confirm password' />
                      </div>
                  </div>
                </div>
               
                <input type='submit' value="Register" className='regboton'/>
              
              </form>
              </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Register;
