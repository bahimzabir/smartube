
import React, { useState } from 'react';
import { HiOutlineXCircle, HiOutlineMenuAlt2, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from 'next-themes';

const menu = [
    {
        name: 'Home',
        href: '#',
        current: true,
    },
    {
        name: 'About',
        href: '#',
        current: false,
    },
    {
        name: 'Contact',
        href: '#',
        current: false,
    },
]

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let { theme, resolvedTheme, systemTheme, setTheme } = useTheme();

    theme = resolvedTheme === 'system' ? systemTheme : resolvedTheme;
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='sticky top-0 z-10 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30'>
            <div className=' pl-4 pr-4 md:flex justify-between items-center'>
                <div className='flex justify-between p-4 md:p-6 '>
                    <div className='mr-0 md:mr-6 font-bold'>
                        <a className='hover:animate-pulse ' href="#">
                            Smart
                            <span className='text-red-600 hover:text-blue-500'> TUBE</span>
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={toggleMenu} className='md:hidden  hover:animate-pulse' aria-label="Toggle Menu" >
                            {isMenuOpen ? <HiOutlineXCircle color={"red"} size={30} /> : <HiOutlineMenuAlt2 size={30} color={"gray"} />}
                        </button>
                    </div>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <div className='flex flex-col items-center justify-center md:flex-row m-2 mb-0 p-4 space-x-2 md:space-x-3 font-semibold md:ml-4'>
                        {menu.map((item, index) => (
                            <a className='text-center hover:animate-pulse md:ml-2 p-4 md:p-2' href={item.href} key={index}>
                                {item.name}
                            </a>
                        ))}
                        <div className='flex space-x-6 md:space-x-0 justify-center'>
                            <div className='pb-4 pt-4 md:p-2'>
                                <button className='cursor-pointer md:p-2 w-24 rounded-lg bg-red-500 hover:bg-red-400 h-10' >Login</button>
                            </div>
                            <div className='pb-4 pt-4 md:p-2'>
                                <button className='cursor-pointer md:p-2 w-24 rounded-lg bg-red-500 hover:bg-red-400 h-10' >Register</button>
                            </div>
                        </div>
                        {/* <div className='items-center justify-center flex mt-2 md:mt-0'>
                            {theme === 'dark' ? <HiOutlineSun className='hover:animate-spin' size={30} color={"white"} onClick={() => { setTheme('light'); console.log(theme) }} /> :
                                <HiOutlineMoon className='hover:animate-pulse' size={30} color={"black"} onClick={() => { setTheme('dark'); console.log(theme) }} />}
                        </div> */}
                        
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-11/12 h-0.5 bg-red-600 rounded-full'></div>
            </div>
        </nav>
    );
};

export default NavBar;
