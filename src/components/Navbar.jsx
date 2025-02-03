import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="mx-4 sm:mx-[17%] mt-2">
            <div className='flex justify-between items-center text-sm py-4'>
                <NavLink to="/"><img className='w-28 cursor-pointer' src='./logo.png' alt="" /></NavLink>
                <ul className='hidden md:flex items-start font-medium gap-12 text-gray-500'>
                    <NavLink to="/">
                        <li className='py-1'>Home</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden' />
                   </NavLink>
                    <NavLink to="/courses">
                        <li className='py-1'>Courses</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/about">
                        <li className='py-1'>About</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/contact">
                        <li className='py-1'>Contact</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden' />
                    </NavLink>
                </ul>
            </div>
            <div className='flex item gap-4'>
                {/* menu icon */}
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
                {/* mobile menu */}
                {showMenu && <div className={`fixed w-full md:hidden right-0 top-0 bottom-0 bg-white overflow-hidden z-20 transition-all duration-500 p-5`}>
                    <div>
                        <img src={assets.logo} alt="" />
                        <img onClick={() => setShowMenu(false)} className='w-9 md:hidden float-end -mt-9' src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='mt-10 flex flex-col items-center gap-4 px-5 text-md font-medium'>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/">Home</NavLink>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/doctors">All Doctors</NavLink>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/about">About Us</NavLink>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to="/contact">Contact Us</NavLink>
                    </ul>
                    <p className='mt-56 text-sm text-center text-gray-400'> &copy; {new Date().getFullYear()} All rights reserved by Madaale</p>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar