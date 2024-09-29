import { headerItems, projects, userInfo } from "@/constants/constant";
import Image from "next/image";
import { contact } from "@/constants/constant";
import { Link as ScrollLink } from "react-scroll";

const Contact: React.FC = () => {
    return (
        <section 
        id={headerItems.contact.page}
        className="flex flex-col text-center justify-center items-center my-40"
        >

            <h1 className="text-white text-4xl my-6">Contact Me!</h1>

            <div className="">
                <p className="text-lg bg-gray-200  hover:text-teal-600 m-2 p-2 rounded-md">Name: {contact.name}</p>
                <p className="text-lg bg-gray-200  hover:text-teal-600 m-2 p-2 rounded-md">Email: {contact.email}</p>
                <p className="text-lg bg-gray-200 hover:text-teal-600 m-2 p-2 rounded-md">Phone: {contact.phone}</p>

                <a href="#" className="hover:text-white text-lg bg-teal-600 items-center justify-center w-30 px-1 rounded">Hire Me!</a>

            </div>
            
        </section>
    )
}

export default Contact;