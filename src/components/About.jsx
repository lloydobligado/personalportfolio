import React from 'react'

const About = (props) => {
  return (
    <section id="About">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </section>
  )
}

export default About