import React from 'react'

const About = () => {
  return (
    <section id="About" className="flex relative">
        <div className="pl-2 sm:pl-8 w-4/5">
          <h2 className="font-sans font-bold">About Me</h2>
          <p className="font-sans font-normal tracking-normal subpixel-antialiased">My name is Lloyd Carie Obligado. As a web developer, I find great joy in being a software engineer. I love creating beautiful and functional websites that make people's lives easier. With my extensive knowledge of HTML, CSS, and JavaScript, I am able to build websites from the ground up, ensuring that they are visually stunning and easy to navigate. I take great pride in the strong foundation I have built for my web portfolio. Each website I create is designed with the user in mind, ensuring that it is easy to use and fully responsive across all devices. Whether it's building an e-commerce site or a blog, I always strive to create a seamless and enjoyable experience for the end user. My dedication to web development fuels my continuous exploration of emerging technologies and current trends, enabling me to deliver exceptional results for my valued clients.</p>
        </div>
        <img className="rounded w-[400px] h-[400px] object-cover object-center absolute right-4 bottom-4 max-[950px]:hidden" src="./src/assets/images/LloydCarie.png" alt="Lloyd Carie M. Obligado" />
    </section>
  )
}

export default About