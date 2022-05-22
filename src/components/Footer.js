import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
        <Link className='link' to='/about'>O stronie | </Link>
        <a className='link' target="_blank" href="https://github.com/PatrykDebiak">@PatrykDebiak &copy; 2022</a>
    </footer>
  )
}

export default Footer;