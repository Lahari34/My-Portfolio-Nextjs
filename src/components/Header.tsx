'use client'
import { useState } from 'react';
import { headerItems, userInfo } from '@/constants/constant';
import { NavItems } from '@/models/Header';
import { BiMenu } from 'react-icons/bi';
import { Link as ScrollLink} from 'react-scroll';

const Header: React.FC = () => {

    const [navItem, showNavItems] = useState<Boolean>(false);

    return (
        
        <header className= "bg-teal-500 p-6 justify-between fixed top-0  w-full z-10 md:flex">
            <div className="flex justify-between">
                <h2 className=" text-white text-2xl font-bold ">{userInfo.name} </h2>
                <h3 className="text-red-600 text-lg md:text-2xl ">- Portfolio</h3>
                <BiMenu 
                  size={30}
                  className="md:hidden"
                  onClick={()=> showNavItems(prevState => !prevState)}
                />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${ navItem ? 'block' : 'hidden'}`}> 
                {
                    Object.keys(headerItems).map(item => (
                        <ScrollLink
                        to={headerItems[item as keyof NavItems].page}
                        key= {headerItems[item as keyof NavItems].label}
                        className="block md:inline-block cursor-pointer hover:text-white"
                        spy={true}
                        smooth={true}
                        >
                            {headerItems[item as keyof NavItems].label}</ScrollLink>
                    ))
                }
            </div>
        </header>
    )
}

export default Header;