import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { SingleContent, SingleContentDescription } from '../styles/common-styles.js';

const Icon = styled.div`
    max-width: 4.4rem;
`;

const Skill = ({ title, description, icon }) => {

    return (
        <SingleContent>
            { icon?.fluid 
                ? <Icon>
                    <Image fluid={icon.fluid} />
                </Icon> 
                : null
            }
            <h1>{title}</h1>
            <SingleContentDescription dangerouslySetInnerHTML={{ __html: description }} />
        </SingleContent>
    )
}

export default Skill
