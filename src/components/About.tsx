'use client'
import { useState } from "react";
import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import ProfilePic from '../pics/profilePic.jpg';

const About: React.FC = () => {
    const [learnMore, setLearnMore] = useState(false);
    
    const toggleLearnMore = () => {
        setLearnMore(!learnMore);
    };

    return (
        <section 
        id={headerItems.about.page}
        className="flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-white text-6xl my-6">About</h1>


                <h2 className=" text-white text-3xl my-5 animate-typing overflow-hidden whitespace-nowrap border-r-2 border-gray-600">
                    Get to Know Me!
                </h2>
                    <p 
                    className="[&>p]:mt-5 text-white"
                    dangerouslySetInnerHTML={{__html: userInfo.about}} 
                    />

                <button className="mt-5 bg-blue-500 text-white px-4, py-1 rounded hover:bg-blue-700"
                onClick={toggleLearnMore}
                >
                    {learnMore ? 'Show Less' : 'Learn More'}
                </button>

                {learnMore && (
                    <div className=" text-white mt-5 text-left">
                        <p className="grid grid-cols-[150px_10px_1fr]"><strong>Address</strong><span><strong>:</strong></span>Hyderabad</p>
                        <p className="grid grid-cols-[150px_10px_1fr]"><strong>Languages</strong><span><strong>:</strong></span>English, Telugu, Hindi</p>
                        <p className="grid grid-cols-[150px_10px_1fr]"><strong>Graduation</strong><span><strong>:</strong></span>Bhoj Reddy Engineering College for Women, 8.4</p>
                        <p className="grid grid-cols-[150px_10px_1fr]"><strong>Intermediate</strong><span><strong>:</strong></span>Sri Gayatri Junior College</p>
                        <p className="grid grid-cols-[150px_10px_1fr]"><strong>SSC</strong><span><strong>:</strong></span>DR HR Techno Schools</p>
                        <p className="grid grid-cols-[150px_10px_1fr]"><strong>Interests</strong><span><strong>:</strong></span>Listening to Music, Dancing, Watching Movies, Arts, Knowing Amazing Facts, Travelling.</p>

                    </div>
                )}

            </div>

            <div className="flex flex-col justify-center text-center items-center">
                <Image 
                src={ProfilePic}
                alt="dp"
                width={300}
                height={300}
                className=" hover:scale-105 m-auto"
                />
                <div className="mt-3 w-3/4 break-words">
                    {
                        userInfo.skills.map(skill => (
                        <span className="bg-gray-400 m-1 p-2 text-sm hover:scale-110 inline-block rounded-md">{skill}</span>
                        ))
                    }
                </div>
            </div>
            
        </section>
    )
}

export default About;