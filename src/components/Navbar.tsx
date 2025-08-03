import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/features/authSlice';

const Navbar: React.FC = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const userName = localStorage.getItem("userName");
    const dispatch = useDispatch();
    const [isClickDownArrow, setIsClickDownArrow] = useState(false);

    const toggleList = () => {
        setIsClickDownArrow(!isClickDownArrow);
    }

    useEffect(() => {
        if (isClickDownArrow) {
            // to stop scroll
            document.body.style.overflow = 'hidden';
        } else {
             // to run scroll
            document.body.style.overflow = '';
        }

        // if component disapear will return the scroll
        return (() => {
             document.body.style.overflow = '';
        })
        
    },[isClickDownArrow])
    
    
        return (
            <>
                {/* navbar-container */}
                <div className='fixed z-100  w-full flex justify-between py-3 px-8 bg-[#1C1E53] text-[#fff] max-sm:px-4'>
                    <Link to="/" className='font-bold text-[24px] max-sm:text-[14px] '>[EDUFREE]</Link>
                     
                    <ul className='flex justify-center items-center gap-8 text-center font-medium text-[16px] max-sm:text-[12px] max-sm:gap-2 '>
                        <li className=''> <Link to='/'>Home</Link> </li>
                        <li> <Link to='#'>Blog</Link> </li>
                        <li> <Link to='#'>FAQ</Link> </li>
                    </ul>

                    {email && password ?
                        <div>
                            <p className='relative flex gap-2 justify-center items-center text-center max-sm:gap-1'>
                            <FaCircleUser className='w-8 h-8 max-sm:w-4 max-sm:h-4' />
                            <span className='max-sm:text-[14px]'>{userName}</span>
                            {/* down-arrow */}
                            <FaAngleDown
                                className='cursor-pointer'
                                onClick={toggleList}
                            />
                            </p>
                            {isClickDownArrow &&
                                <div className='absolute rounded-md text-center py-2 bg-[#888] text-[#fff] top-16 right-5 w-[80px] max-sm:top-12 '>
                                    <p className='cursor-pointer'>Settings</p>
                                    <p
                                        className='cursor-pointer'
                                        onClick={()=>dispatch(logout())}
                                    >
                                        Logout
                                    </p>

                                </div>
                               }

                        </div>
                        
                        :
                    <div className='text-[16px] border-[1px] border-[#fff] rounded-xl px-4 text-center py-1 '>                      
                            <Link to="/login">
                                Login
                            </Link>
                    </div> 
                    }

                </div>
                 {/*== navbar-container ==*/}
            </>
        )
    
};

export default Navbar


