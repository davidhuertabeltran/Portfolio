import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBackground, VideoBackground, HeroContent, HeroH1, HeroDescription, HeroButton, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>David Huerta Beltran</HeroH1>
                <HeroDescription>
                Frontend developer working with projects written in React and Angular (with TypeScript). Additional experience in PHP, Laravel and WordPress.
                </HeroDescription>
                <HeroButton>
                    <Button to="portfolio" onMouseEnter={onHover} onMouseLeave={onHover} smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>
                        My projects {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroButton>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection
