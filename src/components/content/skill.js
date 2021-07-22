import React from 'react';
import styled from '@emotion/styled';

const Content = styled.div`
    padding: 35px;
    border-radius: 0.25rem;
    background-color: #fff;
    -webkit-transition: box-shadow 500ms ease;
    transition: box-shadow 500ms ease;
    
    &:hover {
        box-shadow: 11px 11px 130px 70px rgb(206 212 224 / 18%);
    }

    h1 {
        color: #130f49;
        font-size: 26px;
        line-height: 1.2;
        font-weight: 600;
        letter-spacing: -0.03em;
    }

    p {
        margin-bottom: 10px;
        color: #55527c;
        font-size: 18px;
        line-height: 1.6;
        font-weight: 400;
        letter-spacing: -0.01em;
    }
`;

const Skill = ({ title, tech }) => {
    return (
        <Content>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: tech }}></p>
        </Content>
    )
}

export default Skill
