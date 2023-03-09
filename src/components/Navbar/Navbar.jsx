import React from 'react'
import { Button, Link, LinkWr, Logo } from './style'
import Image from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='navbar1'>
        <Logo src={Image} />
        <LinkWr>
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Service</Link>
            <Link>Pricing</Link>
            <Link>Blog</Link>
            <Button>Contact Us</Button>
        </LinkWr>
    </div>
  )
}

export default Navbar