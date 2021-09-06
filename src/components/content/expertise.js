import React from 'react'
import useExpertise from '../../hooks/useExpertise';
import { GridList, Content, Header, LittleHeader } from '../styles/common-styles';
import Project from '../content/expertise-project';

const Expertise = () => {

    const projects = useExpertise();

    return (
        <Content>
            <LittleHeader>My</LittleHeader>
            <Header>Expertise</Header>

            <GridList>
                {projects.map(project => (
                    <Project 
                        key={project.id}
                        title={project.title}
                        detail={project.detail}
                        place={project.place}
                        year={project.year}
                    />
                ))}
            </GridList>
        </Content>
    )
}

export default Expertise
