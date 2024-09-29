'use client'
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import ProfilePic from '../pics/profilePic.jpg';
import { Link as ScrollLink} from 'react-scroll';

const Intro: React.FC = () => {
    return (
        <section 
        id={headerItems.home.page}
        className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            <div>
                <Image 
                src={ProfilePic}
                alt="dp"
                width={300}
                height={300}
                className="rounded-full shadow-2xl mt-10 transform hover:scale-105"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className=" text-white text-7xl uppercase hidden md:block">Software Developer</h1>
                <h1 className="text-white text-2xl mt-5 md:text-3xl animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-600">
                    Hi I&#39;m <span className="text-red-600 text-3xl md:text-4xl ">{userInfo.name}</span>
                    </h1>
                    <p 
                    className="text-white mt-4 mb-4"
                    dangerouslySetInnerHTML={{__html: userInfo.heading}} 
                    />

                    <ScrollLink
                    to={headerItems.projects.page}
                    className="bg-teal-600 flex items-center justify-center w-28 h-10  hover:text-black rounded cursor-pointer text-neutral-100"
                    spy={true}
                    smooth={true}
                    >Projects</ScrollLink>
            </div>
        </section>
    )
}

export default Intro;