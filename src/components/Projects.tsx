'use client'
import { useState } from "react";
import { headerItems, projects, userInfo } from "@/constants/constant";
import Image from "next/image";

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);

    const handleButtonClick = (projects: string) => {
        setSelectedProject(selectedProject === projects ? null : projects)
    }


    return (
        <section 
        id={headerItems.projects.page}
        className="flex flex-col text-center justify-center items-center my-40"
        >

        <h1 className=" text-white text-6xl my-6">Projects</h1>

        <div className="flex justify-center text-center items-center mt-3 break-words flex-wrap">
            {Object.keys(projects).map(project => {
                const projectInfo = projects[project as keyof typeof projects];

                return (
                    <div key={project} className="m-4">
                        <Image 
                           src={projectInfo.image}
                           alt={projectInfo.title || "Project Image"}
                           width={300}
                           height={300}
                           className=" hover:scale-105 mt-4 p-2"
                        />

                        <h2 className=" text-white text-lg mt-2">{projectInfo.title}</h2>
                        <button
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                            onClick={() => handleButtonClick(project)}
                        >
                            {selectedProject === project ? "Hide Details" : "Show Details"}
                        </button>
                        {selectedProject === project && (
                            <p className=" text-white mt-2">{projectInfo.description}</p>
                        )}
                    </div>
                )
            })}
        </div>
            
        </section>
    )
}

export default Projects;