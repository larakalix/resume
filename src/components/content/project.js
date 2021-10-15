import React from 'react';
import Image from 'gatsby-image';
import { SingleContent, GreenButton, PreviewBox } from '../styles/common-styles.js';

const Project = ({link, name, preview}) => {
    return (
        <SingleContent>
            <h1>{name}</h1>

            <PreviewBox>
                <Image fluid={preview.fluid} />
            </PreviewBox>

            <GreenButton href={link} target="_blank">Go to project</GreenButton>
        </SingleContent>
    )
}

export default Project
