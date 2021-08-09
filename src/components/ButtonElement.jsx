import styled from "styled-components";
import { Link as Linkrouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#0D9DDC' : '#0D9DDC')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '26px')};
    outline: none;
    
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')}; 
    }
`;

export const Button2 = styled.a`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#0D9DDC' : '#0D9DDC')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '26px')};
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')}; 
    }
`