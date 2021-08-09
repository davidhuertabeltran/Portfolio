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
                <HeroH1>David Huerta</HeroH1>
                <HeroDescription>
                    I'm a Junior web developer with experience in HTML, CSS, JavaScript (React), PHP (Laravel) and MySQL.
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
