
import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';


const Main: React.FC = () => {
    return (
        <div className="lg:mx-32 md:mx-4 bg-black">
            <Intro />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main;