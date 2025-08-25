
import './Header.css'
import React from 'react'

const Header = () => {

    return (
        <header
            className="headerMarq"
        >
            <marquee direction='right' loop='2'>  Developed by
                <a
                    href="https://www.linkedin.com/in/rehamAbass/"
                    target='_blank'
                >رهام عباس  💪  Dev. Reham Abass   &copy; 2025  </a>
            </marquee>
        </header>
    )
}


export default Header;

