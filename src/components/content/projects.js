import React from 'react';
import useProjects from '../../hooks/useProjects';
import Project from '../content/project';
import { GridList, Content, Header, LittleHeader } from '../styles/common-styles';

const Projects = () => {

    const projects = useProjects();
    console.log('projects', projects)

    return (
        <Content>
            <LittleHeader>These are my</LittleHeader>
            <Header>Skills</Header>

            <GridList>
                {projects.map(({id, link, name, preview}) => (
                    <Project key={id} name={name} link={link} preview={preview} />
                ))}
            </GridList>

        </Content>
    )
}

export default Projects
