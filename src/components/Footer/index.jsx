import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrapper, SocialLogo, SocialIconsContainer, FooterText, SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/" onClick={toggleHome}>
                            DHB
                        </SocialLogo>
                        <SocialIconsContainer>
                            <SocialIcons>
                                <SocialIconLink href='//www.facebook.com/chido.fajny' target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink href='//www.linkedin.com/in/davidhuertabeltran/' target="_blank" aria-label="LinkedIn">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                            <SocialIcons>
                                <SocialIconLink href='//github.com/davidhuertabeltran' target="_blank" aria-label="Github">
                                    <FaGithub />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialIconsContainer>
                        <FooterText>Made with ❤️ by David Huerta Beltran <br /> {new Date().getFullYear()}</FooterText>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
