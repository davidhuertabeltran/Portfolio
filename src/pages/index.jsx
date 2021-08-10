import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Burger from '../components/Burger';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { About, Contact } from '../components/AboutSection/Data';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/';

const Home = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    

    return (
        <>
            <Navbar toggle={toggle} theme={theme} toggleTheme={toggleTheme} />
            <Burger isOpen={isOpen} toggle={toggle} theme={theme} toggleTheme={toggleTheme}/>
            <HeroSection />
            <AboutSection {...About} />
            <Portfolio />
            <AboutSection {...Contact} />
            <Footer />
        </>
    )
}

export default Home
