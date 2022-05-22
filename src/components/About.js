import React from 'react'
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div>
        <h4>
          v1.0.0 <br/>
          strona bez logowania(zabrakło czasu) <br/>
            
        </h4>
        
        <Link className='link' to='/todolist'>Powrót</Link>
    </div>
  )
}

export default About