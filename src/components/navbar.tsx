
import React, { useState } from 'react';
import { HiOutlineXCircle, HiOutlineMenuAlt2 } from 'react-icons/hi'

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

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-opacity-70'>
            <div className='pl-4 pr-4 md:flex justify-between items-center'>
                <div className='flex justify-between p-4 md:p-6 '>
                    <div className='mr-0 md:mr-6 font-bold'>
                        <a className='text-white hover:animate-pulse' href="#">
                            Smart
                            <span className='text-red-600 hover:text-blue-500'> TUBE</span>
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={toggleMenu} className='md:hidden text-white hover:animate-pulse' aria-label="Toggle Menu" >
                            {isMenuOpen ? <HiOutlineXCircle color={"text-red-600"} /> : <HiOutlineMenuAlt2 />}
                        </button>
                    </div>
                </div>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <div className='grid justify-center md:flex m-2 p-4 space-x-2 md:space-x-3 font-semibold md:ml-4'>
                        {menu.map((item, index) => (
                            <a className='text-white hover:animate-pulse ml-2 p-4 md:p-2' href={item.href} key={index}>
                                {item.name}
                            </a>
                        ))}
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
