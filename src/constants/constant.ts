import { UserObject } from "@/models/User"
import { NavItems } from "@/models/Header"

export const userInfo: UserObject = {
    name: 'Lahari Tipirishetty',
    picture: 'D:/Portfolio/portfolio/src/pics/profilePic.jpg',
    heading: 'I&#39;m a Software Developer based in India, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experience. I&#39;ve built an application leveraging cutting-edge technologies to drive innovation.',
    about: `<p> I am a passionate software Developer with self-directed and motivated to apply education and experience in a job role. Excellent listener comfortable completing various tasks to keep operations running smoothly.Energetic individual with outstanding interpersonal, analytical and critical thinking skills.</p>
            <p>I have worked as an Intern Bacherlor Software Engineer for Honeywell, Bengaluru. I've had a privilege to work on an immersive project- Immersive Field Simulator Virtual Tour using cutting-edge technologies that allowed me to refine my skills and approach to problem-solving.</p> 
            `,
    skills: ['C#', 'ASP.NET Core', 'Unity 3D', 'React', 'SignalR', 'Java', 'SQL', 'SSMS', 'C++','Python', 'HTML', 'CSS', 'Javascript'],
} 

export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home'},
    about: { label: 'About', page: 'about'},
    projects: { label: 'Projects', page: 'projects'},
    contact: { label: 'Contact', page: 'contact'}
}

export const projects = {
    project1: {
        image: 'https://i.ibb.co/fFf6BrX/project1.png',
        title: 'Ultimate Frolic Hub',
        description: 'Description:  The “Ultimate Frolic Hub” is gaming platform that offers a pool of four classic and engaging games designed to provide endless entertainment. The Hub includes…  Memory Matching: where players challenge their cognitive skills by flipping cards to find matching pairs.  Word Chaining: tests vocabulary and creativity, requiring players to link words in a continuous chain.  Word scramble: jumbled letters encourage players to rearrange to form meaningful words.  Ultimate tic-tac-toe: a strategic twist on the traditional game that challenges players to win across multiple boards. With its diverse range of games, the ultimate frolic hub promises hours of fun, intellectual stimulation, and strategic gameplay for players of all ages. ',
    },
    project2: {
        image: 'https://i.ibb.co/1QzjhNL/project2.png',
        title: 'Detection of Phishing Websites',
        description: 'Description: The development of a machine learning-based system to detect phishing websites by analyzing URL using Feature engineering. Gathered and processed a diverse dataset of legitimate and phishing URLs from multiple sources. Engineered features including domain age, length, and suspicious keywords. Feature Extraction:  Lexical Properties: Extract features like URL structure and composition.  Statistical Properties: describing the URL patterns.  Network-based Properties: Includes the host and domain names specified in the URL.  Reputation Properties: describing the ranking and popularity of the web page identified by the URL.  Textual and Visual Properties: includes HTML and CSS contents in the web page. ',
    },
    project3: {
        image: 'https://i.ibb.co/hFNwPF0/project3.jpg',
        title: 'IFS Virtual Tour',
        description: 'A Virtual tour is a digital replica of a physical plant, typically accessed through a digital device such as computer or VR headset. It combines panoramic images, videos and interactive elements to simulate a realistic exploration of the plant. There is a server to which the content creator hosts the 3D Panorama content of the physical plant. The trainee can be able to get trained and walkthrough the plant using pre-defined guidance to avoid hazardous situations and provides a safest exploration within the real plant.'
    }
}

export const contact = {
    name: 'Lahari Tipirishetty',
    email: 'laharitsh34@gmail.com',
    phone: 7893833076
}

export const footer = {
    thanks: " Thank You...",
    hireme: "Hire Me!"
}

