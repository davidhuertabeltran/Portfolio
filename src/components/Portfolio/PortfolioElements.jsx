import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 0;
`;

export const PortfolioH2 = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 64px;
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;
export const PortfolioWrapper = styled.div`
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        max-width: 100%;
    }

`;

export const PortfolioCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    margin: 10px;
    text-decoration: none;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }

    @media screen and (max-width: 1000px) {
        margin: 25px 20px;
    }

    @media screen and (mac-width: 768px) {
        margin: 40px 20px;
    }
`;

export const PortfolioImage = styled.img`
    height: auto;
    width: 300px;
    margin-bottom: 10px;
`;

export const PortfolioH3 = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;

`;

export const PortfolioP = styled.p`
    font-size: 1rem;
    text-align: center;
`;