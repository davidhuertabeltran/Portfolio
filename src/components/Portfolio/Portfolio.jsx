import React from 'react';
import Data from './Data';
import { PortfolioContainer, PortfolioH2, PortfolioWrapper, PortfolioCard, PortfolioImage, PortfolioH3, PortfolioP } from './PortfolioElements';

const Portfolio = () => {
    return (
        <PortfolioContainer id='portfolio'>
            <PortfolioH2>My Portfolio</PortfolioH2>
            <PortfolioWrapper>
                {
                    Data.map((item, i) => {
                        return <PortfolioCard to={item.to} key={i} target="_blank" className="portfolio-card">
                            <PortfolioImage src={item.image} />
                            <PortfolioH3>{item.name}</PortfolioH3>
                            <PortfolioP>{item.desc}</PortfolioP>
                        </PortfolioCard>
                    })
                }
            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

export default Portfolio
