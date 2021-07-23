import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Content = styled.div`
    padding: 2rem 3rem 5rem;
    border-radius: 0.25rem;
    background-color: #fff;
    margin-bottom: 2.8rem;
    -webkit-transition: box-shadow 500ms ease;
    transition: box-shadow 500ms ease;
    
    &:hover {
        box-shadow: 11px 11px 130px 70px rgb(206 212 224 / 18%);
    }

    h1 {
        color: #130f49;
        font-size: 3.2rem;
        line-height: 1.2;
        font-weight: 600;
        letter-spacing: -0.03em;
    }

    @media (max-width: 768px) {
        padding-top: 4rem;
    }
`;

const SkillContent = styled.div`
    color: #55527c;
    font-size: 1.8rem;
    line-height: 1.6;
    font-weight: 400;
    letter-spacing: -0.05em;
    text-align: justify;
`;

const Icon = styled.div`
    max-width: 4.4rem;
`;

const Skill = ({ title, description, icon }) => {
    console.log(icon)
    return (
        <Content>
            <Icon>
                <Image fluid={icon.fluid} />
            </Icon>
            <h1>{title}</h1>
            <SkillContent dangerouslySetInnerHTML={{ __html: description }}></SkillContent>
        </Content>
    )
}

export default Skill
