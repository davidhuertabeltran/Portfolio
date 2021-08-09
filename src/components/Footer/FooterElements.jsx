import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background: rgb(19, 28, 35);
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%

`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

`;

export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 50px;
`;

export const SocialIconLink = styled.a`
    color: white;
    font-size: 24px;
`;

export const FooterText = styled.small`
    color: white;
    margin: 16px 0;
    text-align: center;
`;