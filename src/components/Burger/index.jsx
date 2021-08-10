import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, DarkIcon } from './BurgerElements';
import { ToggleTheme } from '../DarkMode/Toggle';

const Sidebar = ({ isOpen, toggle, theme, toggleTheme }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                    <SidebarLink>
                        <DarkIcon onClick={toggleTheme}>
                            <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
                        </DarkIcon>
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
