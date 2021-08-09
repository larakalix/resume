import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'gatsby-image';
import useMainBanner from '../../hooks/useBanner';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = styled.div`
    position: relative;
    padding: 13rem 0 7rem 0;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 3rem;
    }

    @media (max-width: 768px) {
        display: grid;
        padding: 7rem 0 3rem 0;
    }
`;

const Box = styled.div`
    order: 1;

    @media (max-width: 576px) {
        order: ${props => props.mobileOrder ? 1 : 2};
    }
`;

const HomePhoto = styled.div`
    display: block;
    position: relative;
    width: 100%;
    background-color: #fff;
    border-radius: 50%;
    max-height: 35rem;
    border: 18px solid #fff;
    overflow: hidden;
    -webkit-box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 0 25px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);

    @media (max-width: 768px) {
        margin-top: 6rem;
        max-height: 65vh;
    }

    @media (min-width: 768px) {
        max-height: 45rem;
    }
`;

const Header = styled.h1`
    color: ${ props => props.pColor.hex };
    font-size: 6.5rem;
    line-height: 1.05;
    letter-spacing: -0.03em;
    font-weight: bold;

    span {
        color: ${ props => props.sColor.hex };
    }

    @media (max-width: 768px) {
        font-size: 3.5rem;
        margin-top: 2.5rem;
        text-align: center;
    }
`;

const Button = styled.a`
    background-color: ${ props => props.pColor.hex };
    border-color: ${ props => props.pColor.hex };
    color: #ffffff;
    text-decoration: none;
    padding: 2rem 4rem;
    border-style: solid;
    border-width: 0.0625rem;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    line-height: 1rem;
    margin-top: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    max-width: 25rem;

    @media (max-width: 768px) {
        max-width: 100%;
        margin: 1.2rem auto;
        justify-content: center;
    }
`;

const Description = styled.div`
    color: #55527c;
    font-size: 1.8rem;
    max-width: 85%;
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: -0.01em;
    margin-top: 1.4rem;
    margin-bottom: 2.8rem;

    @media (max-width: 768px) {
        max-width: 100%;
        font-size: 1.6rem;
        text-align: justify;
    }
`;

const MainContent = () => {

    const { header, description, thumbnail, download, link, primarycolor, secondarycolor } = useMainBanner();

    return (
        <Hero>
            <Box mobileOrder={false}>
                <Header pColor={primarycolor} sColor={secondarycolor} dangerouslySetInnerHTML={{ __html: header }}></Header>
                <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
                {
                    download ? ( <Button pColor={primarycolor} href={link} target="_blank" download>
                        <StaticImage
                            css={css`
                                max-width: 2rem;
                                margin-right: 3rem;
                            `}
                            src='./../../../assets/result.svg' alt="Inbox" />
                        View resume</Button> ) : null
                }
            </Box>
            <Box mobileOrder={true}>
                <HomePhoto>
                    <Image fluid={thumbnail.fluid} />
                </HomePhoto>
            </Box>
        </Hero>
    )
}

export default MainContent
