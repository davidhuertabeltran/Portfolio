import styled from "styled-components";

export const AboutContainer = styled.div`
    // color: white;
    // background: ${({ lightBackground }) => (lightBackground ? 'white' : 'rgb(19, 28, 35)')};
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 1;
    height: 560px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: flex;
    align-tems: center;
    justify-content: center;
    padding-top: 40px;
    flex-direction: ${({ imageLeft }) => (imageLeft ? 'row' : 'row-reverse')};

    @media screen and (max-width: 768px) {
       flex-direction: column;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    // color: white;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: bold;
    letter-spacing: 1.3px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    // color: white;
    margin-bottom: 24px;
    gont-size: 48px;
    line-height: 1.1;
    font-weight: bold;
    // color: ${({ lightText }) => (lightText ? 'white' : 'rgb(19, 28, 35)')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Text = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    line-height: 1.6em;
    font-size: 18px;
    // line-height: 24px;
    // color: ${({ darkText }) => (darkText ? 'rgb(19, 28, 35)' : 'white')};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImageWrapper = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Img = styled.img`
    width: 70%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;