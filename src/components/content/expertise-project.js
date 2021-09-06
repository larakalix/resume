import React from 'react'
import styled from '@emotion/styled';
import { SingleContent, SingleContentDescription } from '../styles/common-styles.js';

const PlaceTag = styled.span`
    font-size: 1.6rem;
    color: #34a1cd;
`;

const Project = ({title, detail, place, year}) => {
    return (
        <SingleContent>
            <PlaceTag>{place} - {year}</PlaceTag>
            <h1>{title}</h1>
            
            <SingleContentDescription dangerouslySetInnerHTML={{ __html: detail }} />
        </SingleContent>
    )
}

export default Project
