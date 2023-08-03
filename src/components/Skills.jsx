import React from 'react'
import TechSkills from '../utils/card-skills.js'

const Skills = () => {
  const cardSkills = TechSkills.map(techSkill => {
    return (
      <div key={techSkill.id} className="card flex flex-col justify-end items-center h-44 w-36 m-3 bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={techSkill.icons} alt="Card Image" className="w-full h-36 pt-3 pl-5 pr-5 object-contain object-center" />
        <div className="p-4">
          <p className="text-xs">{techSkill.name}</p>
        </div>
      </div>
    )
  })
  return (
   <section id="Skills" style={{ position: "relative" }}>
        <div className="pl-2 sm:pl-8 w-4/5">
          <h2 className="font-sans font-bold">Technical Skills</h2>
          <p className="font-sans font-normal tracking-normal subpixel-antialiased">I showcase proficiency in HTML5, CSS3, and JavaScript, creating visually appealing and responsive web applications. I utilize frameworks like Vue.js, Vuetify, and jQuery, along with SASS, Bootstrap, and TailwindCSS for efficient design. Additionally, I have backend skills in PHP, Java, and Python, employing CodeIgniter, Node.js, and databases like MySQL and Microsoft SQL Server. I implement JWT for secure authentication and authorization. Currently, I am learning React.js to enhance my front-end capabilities. With experience in Arduino, design tools like Figma and Canva, and deployment using Vercel and Netlify, my portfolio reflects versatility and a commitment to staying up to date with the latest technologies.</p>
          
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center w-full m-auto">
            {cardSkills}
        </div>

   </section>
  )
}

export default Skills