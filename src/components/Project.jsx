import React from 'react'
import Projects from '../utils/projects'
import GenerateToolsText from './Generate-tool';

const Project = () => {
  
  const Proyekto = Projects.sort((a, b) => b.id - a.id).map((project) => {
    const toolsText = GenerateToolsText(project.tools);
  
    return (
      <div className="Projects__containter__card rounded bg-white shadow-lg m-5 min-h-[500px] max-w-[310px]" key={project.image}>
        <div>
          <img className="rounded-t w-full" src={project.image} alt={project.name} />
        </div>
        <div className='m-3'>
          <h3 className='text-xl underline decoration-solid'>{project.name}</h3>
          <div className='mt-2 flex'>
            {toolsText}
          </div>
          {/* <img className='w-[100px] h-[100px]' src='../assets/icons/LloydCarie.jpg' alt="" /> */}
          <p className='mt-2 mb-8 font-sans font-normal tracking-normal subpixel-antialiased'>{project.description}</p>
        </div>
      </div>
    );
  });
  
  return (
    <section id="Projects" style={{ position: "relative" }}>
        <div className="pl-2 sm:pl-8  w-4/5">
          <h2 className="font-sans font-bold">Projects</h2>
          <p className="font-sans font-normal tracking-normal subpixel-antialiased">These projects demonstrate my ability to deliver innovative and practical solutions while incorporating the latest technologies and industry best practices. I take pride in my attention to detail and commitment to creating seamless and engaging user experiences.</p>
        </div>
        <div className="Projects__containter mt-12 flex flex-wrap justify-center items-center w-full m-auto">
            {Proyekto}
        </div>
    </section>
  )
}

export default Project