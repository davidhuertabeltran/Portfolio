import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, DarkIcon } from './NavbarElements'
import { ToggleTheme } from '../DarkMode/Toggle';

const Navbar = ({ toggle, theme, toggleTheme }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }} >
                <Nav scrollNav={scrollNav}>
                    <NavContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            DHB
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItems>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-60}>About</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-30}>Portfolio</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                            </NavItems>
                            <NavItems>
                                <NavLinks>
                                    <DarkIcon onClick={toggleTheme}>
                                        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
                                    </DarkIcon>
                                </NavLinks>
                            </NavItems>
                        </NavMenu>
                    </NavContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar