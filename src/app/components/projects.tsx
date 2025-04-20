import { backgroundImage } from "flowbite-react/plugin/tailwindcss/theme";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 bg-zinc-900">
      {/* Project image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-auto object-contain"      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
        </div>

        {/* GitHub button */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="text-lg" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};



export default function Projects() {
return(
<>
<div id="Project" className="bg-gradient-to-br from-rose-900 to-black rounded-4xl "  style={{margin:"10px",borderRadius:"20px"}}>
<h2
          className="text-3xl text-white font-bold text-center pt-10 mb-10 "
        
        >
           ✨ My Projects
        </h2>
<div className="grid gap-4" style={{margin:"20px",borderRadius:"10px"}}>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/pimgs/1.png" alt=""/>
    </div>
    <div className="grid grid-cols-5 gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/pimgs/2.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/pimgs/8.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/pimgs/11.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/pimgs/4.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/pimgs/9.png" alt=""/>
        </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
 
  <ProjectCard
    title="Crimson plate"
    description="A full-stack app for ordering food which is made up of html,css,js,php,mysql."
    imageUrl="/pimgs/1.png"
    githubUrl="https://github.com/your-username/healthcare-reception"
  />
 <ProjectCard
    title="Healthcare Reception System"
    description="A full-stack app for managing appointments and billing."
    imageUrl="/pimgs/2.png"
    githubUrl="https://github.com/your-username/healthcare-reception"
  />
 <ProjectCard
    title="Healthcare Reception System"
    description="A full-stack app for managing appointments and billing."
    imageUrl="/pimgs/16.png"
    githubUrl="https://github.com/your-username/healthcare-reception"
  />
 <ProjectCard
    title="Healthcare Reception System"
    description="A full-stack app for managing appointments and billing."
    imageUrl="/pimgs/4.png"
    githubUrl="https://github.com/your-username/healthcare-reception"
  />
 
 <ProjectCard
    title="Healthcare Reception System"
    description="A full-stack app for managing appointments and billing."
    imageUrl="/pimgs/6.png"
    githubUrl="https://github.com/your-username/healthcare-reception"
  />
 <ProjectCard
    title="Healthcare Reception System"
    description="A full-stack app for managing appointments and billing."
    imageUrl="/pimgs/2.png"
    githubUrl="https://github.com/your-username/healthcare-reception"
  />
 
</div>
    
</div>

</div>
</>
);
}