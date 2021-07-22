import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import useMainBanner from '../../hooks/useBanner';

const Hero = styled.div`
    position: relative;
    padding: 10vh 0;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 3rem;
    }
`;

const HomePhoto = styled.div`
    display: block;
    position: relative;
    width: 100%;
    background-color: #fff;
    border-radius: 50%;
    max-height: 40rem;
    border: 18px solid #fff;
    overflow: hidden;
    -webkit-box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
    -moz-box-shadow: 0 0 25px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);
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
    display: inline-block;
    font-weight: bold;
`;

const Description = styled.div`
    color: #55527c;
    font-size: 1.8rem;
    max-width: 85%;
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: -0.01em;
    margin-bottom: 10px;
`;

const MainContent = () => {

    const { header, description, thumbnail, download, link, primarycolor, secondarycolor } = useMainBanner();
        // const rgba = convertHexToRGBA(secondarycolor.hex, 0.1, 1);

    return (
        <Hero>
            <div>
                <Header pColor={primarycolor} sColor={secondarycolor}
                dangerouslySetInnerHTML={{ __html: header }}></Header>
                <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
                {
                    download ? ( <Button pColor={primarycolor} href={link} download>Download</Button> ) : null
                }
            </div>
            <div>
                <HomePhoto>
                    <Image fluid={thumbnail.fluid} />
                </HomePhoto>
            </div>
        </Hero>
    )
}

export default MainContent
// https://lmpixels.com/wp/leven-wp/full-width/
