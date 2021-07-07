import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Skill from '../content/skill';
import UseSkills from '../../hooks/useSkills';

const Content = styled.div`
    padding: 10vh 0;
    max-width: 70vw;
    margin: 0 auto;
`;

const SkillList = styled.div`
    max-width: 70vw;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 3rem
    }
`;

const Header = styled.h1`
    margin-top: 0px;
    margin-bottom: 3rem;
    color: #130f49;
    font-size: 64px;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.04em;
    text-align: center;
`;

const Skills = () => {

    const skills = UseSkills();

    return (
        <Content>
            <h5 css={css`
              text-align: center;
              margin: 0;
            `}>
                These are</h5>
            <Header>Skills</Header>

        <SkillList>
          {skills.map(sk => (
              <Skill 
                key={sk.id}
                title={sk.title}
                tech={sk.tech}
              />
          ))}
        </SkillList>

        </Content>
    )
}

export default Skills
