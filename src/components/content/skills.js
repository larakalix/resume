import React from 'react';
import useSkills from '../../hooks/useSkills';
import Skill from '../content/skill';
import { GridList, Content, Header, LittleHeader } from '../styles/common-styles';

const Skills = () => {

    const skills = useSkills();

    return (
        <Content>
            <LittleHeader>These are my</LittleHeader>
            <Header>Skills</Header>

            <GridList>
                {skills.map(skill => (
                    <Skill 
                        key={skill.id}
                        title={skill.title}
                        description={skill.description}
                        icon={skill.icon}
                    />
                ))}
            </GridList>

        </Content>
    )
}

export default Skills
