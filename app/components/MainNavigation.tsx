import { Link, useLocation } from '@remix-run/react';
import { useState } from 'react';
import Hamburger from '/shared/icon-hamburger.svg';
import Close from '/shared/icon-close.svg';
import Logo from '/shared/logoSW.png';


interface NavItem {
    id: number;
    num: string;
    text: string;
    link: string;
}

const navItems: NavItem[] = [
    { id: 0, num: '00', text: 'HOME', link: '/' },
    { id: 1, num: '01', text: 'PEOPLE', link: '/people' },
    { id: 2, num: '02', text: 'PLANETS', link: '/planets' },
    { id: 3, num: '03', text: 'FILMS', link: '/films' },
    { id: 4, num: '04', text: 'STARSHIPS', link: '/starships' },
    { id: 5, num: '05', text: 'SPECIES', link: '/species' }
];

const baseStyleLinks = {
    base: 'h-full py-9 tracking-[2.7px] hover:cursor-pointer hover:border-b-2 hover:border-b-white/60',
    active: 'h-full py-9 tracking-[2.7px] border-b-2 border-b-white'
};

function MainNavigation() {
    const [nav, setNav] = useState(false);
    const location = useLocation();

    const showNavbar = () => {
        setNav(!nav);
    };

    return (
        <>
            <nav className='barlow-CondensedFont flex lg:gap-x-14 md:pt-0 lg:pt-6 fixed top-0 z-10 w-full'>
                {/* Logo, Hamburger and Close mobile */}
                <div className='px-5 md:pl-8 md:pr-0 flex py-3 justify-between items-center w-full lg:max-w-max'>
                    <Link to='/' aria-label='Logo'>
                        <img className='w-[4rem] md:w-[5rem] lg:w-[6rem]' src={Logo} alt="Logo"/>
                    </Link>
                    <button onClick={showNavbar} className='block md:hidden' aria-label="Open and Close Navigation">
                        {nav 
                            ? <img className='relative z-20 ease-in duration-700' src={Close} alt="Close Navigation"/>
                            : <img className='ease-out duration-700' src={Hamburger} alt="Open Navigation"/> }
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center w-full'>
                    <div className='hidden lg:block h-[0.063rem] w-[29.563rem] bg-white/20 relative z-10 mr-[-2%]'></div>
                    <ul className='relative top-0 text-white backdrop-blur-lg bg-white/10 flex items-center md:gap-x-10 
                        lg:gap-x-6 md:px-14 lg:pl-28 pr-4 h-[6rem] w-full'>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Link to={item.link} className={location.pathname === item.link ? baseStyleLinks.active : baseStyleLinks.base}>
                                    <span className='font-bold mr-1 sm:block md:hidden lg:inline-block'>{item.num} </span> {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'text-white text-lg pl-8 pt-32 z-10 fixed md:hidden right-0 top-0 w-[67%] h-full backdrop-blur-lg bg-white/10 ease-in-out duration-700'
                            : 'ease-in-out w-[67%] pl-8 pt-32 z-10  duration-700 fixed top-0 bottom-0 right-[-100%]'
                    }
                >
                    {navItems.map(item => (
                        <li key={item.id} className='my-2 w-full tracking-[2.7px] hover:cursor-pointer hover:border-r-2 hover:border-r-white'>
                            <Link to={item.link} className='block w-full py-2'>
                                <span className='font-bold mr-2'>{item.num} </span>{item.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default MainNavigation;


