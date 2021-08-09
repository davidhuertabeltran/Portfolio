import React from 'react';
import { Button, Button2 } from '../ButtonElement';
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Text, ButtonWrapper, ImageWrapper, Img } from './AboutElements';

const AboutSection = ({ lightBackground, id, topLine, lightText, Headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2, imageLeft, url }) => {
    return (
        <>
            <AboutContainer lightBackground={lightBackground} id={id}>
                <AboutWrapper>
                    <AboutRow imageLeft={imageLeft}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{Headline}</Heading>
                                <Text darkText={darkText}>
                                    {description.split('\n').map((it, i) => <div className="text-about" key={'x' + i}>{it}</div>)}
                                </Text>
                                <ButtonWrapper>
                                    <Button2 href={url}>{buttonLabel}</Button2>
                                </ButtonWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrapper>
                                <Img src={img} alt={alt} />
                            </ImageWrapper>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}


export default AboutSection
